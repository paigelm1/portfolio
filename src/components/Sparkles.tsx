"use client";

import { useEffect } from "react";

const COLORS = ["#f9d71c", "#ff6bff", "#7eb9ff", "#ff9de2", "#b8f0ff", "#ffd6ff"];

export default function Sparkles() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement("span");
        const angle = (i / 8) * 2 * Math.PI + Math.random() * 0.5;
        const distance = 35 + Math.random() * 35;
        const size = 10 + Math.random() * 10;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        sparkle.textContent = "✦";
        sparkle.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          font-size: ${size}px;
          color: ${color};
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          animation: sparkle-fly 0.7s ease-out forwards;
          --dx: ${dx}px;
          --dy: ${dy}px;
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 700);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <style>{`
      @keyframes sparkle-fly {
        0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0); opacity: 0; }
      }
    `}</style>
  );
}
