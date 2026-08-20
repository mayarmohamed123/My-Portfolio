"use client";

interface MayarLogoProps {
  showText?: boolean;
  className?: string;
  iconSize?: number;
}

export default function MayarLogo({
  showText = true,
  className = "",
  iconSize = 42,
}: MayarLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG matching the user's custom 'M' logo */}
      <svg
        width={iconSize}
        height={(iconSize * 34) / 42}
        viewBox="0 0 160 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="mayarLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* 3 Interlocking Rounded Pills forming the 'M' Emblem */}
        <g fill="url(#mayarLogoGrad)">
          {/* Left Pillar Capsule */}
          <rect
            x="12"
            y="35"
            width="32"
            height="85"
            rx="16"
            transform="rotate(-22 12 35)"
          />

          {/* Center Crossing Capsule */}
          <rect
            x="48"
            y="12"
            width="32"
            height="95"
            rx="16"
            transform="rotate(22 48 12)"
          />

          {/* Right Pillar Capsule */}
          <rect
            x="96"
            y="35"
            width="32"
            height="85"
            rx="16"
            transform="rotate(-22 96 35)"
          />
        </g>
      </svg>

      {/* Brand Text 'MAYAR' */}
      {showText && (
        <span className="font-bold tracking-wider text-2xl md:text-3xl text-[#6366F1] dark:text-[#7C3AED] font-sans uppercase flex items-center gap-1.5">
          MAYAR
        </span>
      )}
    </div>
  );
}
