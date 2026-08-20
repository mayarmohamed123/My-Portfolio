"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isDark = theme === "dark";

    // Group for object rotation
    const group = new THREE.Group();
    scene.add(group);

    // Outer Wireframe Icosahedron
    const outerGeom = new THREE.IcosahedronGeometry(2.2, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      wireframe: true,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x6366f1,
      emissiveIntensity: isDark ? 0.35 : 0.2,
    });
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    group.add(outerMesh);

    // Inner Glowing Core
    const innerGeom = new THREE.IcosahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x7c3aed,
      shininess: 100,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    group.add(innerMesh);

    // Orbiting Particles Ring
    const ringParticlesCount = 60;
    const ringGeom = new THREE.BufferGeometry();
    const ringPositions = new Float32Array(ringParticlesCount * 3);

    for (let i = 0; i < ringParticlesCount; i++) {
      const angle = (i / ringParticlesCount) * Math.PI * 2;
      const radius = 3.2 + (Math.random() - 0.5) * 0.4;
      ringPositions[i * 3] = Math.cos(angle) * radius;
      ringPositions[i * 3 + 1] = Math.sin(angle) * radius;
      ringPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    }

    ringGeom.setAttribute("position", new THREE.BufferAttribute(ringPositions, 3));
    const ringMat = new THREE.PointsMaterial({
      color: 0x7c3aed,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const ringParticles = new THREE.Points(ringGeom, ringMat);
    group.add(ringParticles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.6 : 0.9);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x7c3aed, isDark ? 3 : 2, 20);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x6366f1, isDark ? 2.5 : 1.8, 20);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    // Interactive mouse rotation
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = (y / rect.height - 0.5) * 2;
    };

    container.addEventListener("mousemove", handlePointerMove);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      group.rotation.x = t * 0.2 + mouseY * 0.4;
      group.rotation.y = t * 0.25 + mouseX * 0.4;

      innerMesh.rotation.x = -t * 0.3;
      innerMesh.rotation.y = -t * 0.4;

      ringParticles.rotation.z = t * 0.3;

      // Pulse inner core scale
      const scale = 1 + Math.sin(t * 2) * 0.06;
      innerMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative cursor-grab active:cursor-grabbing flex items-center justify-center"
    />
  );
}
