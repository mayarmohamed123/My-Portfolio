"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color theme setup
    const isDark = theme === "dark";
    const particleColor = isDark ? 0x7c3aed : 0x6366f1;
    const secondaryColor = isDark ? 0x6366f1 : 0x7c3aed;

    // Particles creation
    const particleCount = Math.min(Math.floor(window.innerWidth / 12), 120);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      scales[i] = Math.random() * 0.8 + 0.2;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Custom Particle Texture
    const createParticleCanvas = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.4, "rgba(124, 58, 237, 0.8)");
        grad.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
      }
      return canvas;
    };

    const texture = new THREE.CanvasTexture(createParticleCanvas());

    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: isDark ? 1.2 : 1.0,
      map: texture,
      transparent: true,
      opacity: isDark ? 0.75 : 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating 3D Geometric Meshes
    const meshes: THREE.Mesh[] = [];
    const meshGeometries = [
      new THREE.IcosahedronGeometry(2, 0),
      new THREE.OctahedronGeometry(2.5, 0),
      new THREE.TorusGeometry(2, 0.5, 12, 24),
    ];

    meshGeometries.forEach((geom, idx) => {
      const meshMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? particleColor : secondaryColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.15 : 0.1,
      });
      const mesh = new THREE.Mesh(geom, meshMat);
      mesh.position.set(
        (idx - 1) * 22,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.4 : 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7c3aed, isDark ? 2 : 1.2, 50);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6366f1, isDark ? 2 : 1.2, 50);
    pointLight2.position.set(-15, -15, 10);
    scene.add(pointLight2);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Particle rotation & gentle movement
      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
      particles.rotation.x = elapsedTime * 0.01 + targetY * 0.2;

      // Rotate geometric meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * (0.2 + index * 0.1);
        mesh.rotation.y = elapsedTime * (0.15 + index * 0.05);
        mesh.position.y += Math.sin(elapsedTime + index) * 0.01;
      });

      // Point lights orbital drift
      pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 20;
      pointLight1.position.y = Math.cos(elapsedTime * 0.3) * 20;
      pointLight2.position.x = Math.cos(elapsedTime * 0.4) * -20;
      pointLight2.position.y = Math.sin(elapsedTime * 0.6) * 20;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();


    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
