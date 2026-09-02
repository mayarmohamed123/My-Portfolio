"use client";

interface MayarLogoProps {
  showText?: boolean;
  className?: string;
  iconSize?: number;
}

export default function MayarLogo({
  showText = true,
  className = "",
  iconSize = 38,
}: MayarLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Modern 'M' Monogram Emblem */}
      <div
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#6366F1] p-[2px] shadow-lg shadow-[#7C3AED]/30 transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <div className="w-full h-full rounded-[10px] bg-[#0B0914] flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[72%] h-[72%]"
          >
            <defs>
              <linearGradient id="mayarMGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="40%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            {/* Bold, Elegant Stylized 'M' */}
            <path
              d="M16 82 V25 C16 20.5 19.5 17 24 17 C26.8 17 29.3 18.5 30.8 21.2 L50 55 L69.2 21.2 C70.7 18.5 73.2 17 76 17 C80.5 17 84 20.5 84 25 V82 C84 85.5 81 88 77.5 88 C74 88 71.5 85.5 71.5 82 V37 L54.5 67 C53 69.5 47 69.5 45.5 67 L28.5 37 V82 C28.5 85.5 26 88 22.5 88 C19 88 16 85.5 16 82 Z"
              fill="url(#mayarMGrad)"
            />
          </svg>
        </div>
      </div>

      {/* Brand Name Text 'MAYAR' */}
      {showText && (
        <span className="font-extrabold tracking-wider text-xl md:text-2xl text-text-main font-sans uppercase flex items-center">
          MAYAR
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] inline-block ml-1" />
        </span>
      )}
    </div>
  );
}
