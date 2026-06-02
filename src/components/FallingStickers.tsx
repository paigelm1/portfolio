"use client";

import { useEffect } from "react";

// Pixel crop for each sticker in the 2862×1372 source image
// [x, y, width, height] in pixels
const STICKERS = [
  { x: 50,   y: 65,  w: 1200, h: 675 },  // Leland green logo
  { x: 1220, y: 95,  w: 880,  h: 460 },  // Script Jeland
  { x: 2180, y: 0,   w: 682,  h: 815 },  // Shark
  { x: 280,  y: 410, w: 695,  h: 640 },  // Pennant flag
  { x: 945,  y: 690, w: 770,  h: 620 },  // Globe oval
];

const IW = 2862;
const IH = 1372;
const SCALE = 0.15;

export default function FallingStickers() {
  useEffect(() => {
    const created: HTMLElement[] = [];

    // Drop each sticker 3 times with staggered timing
    STICKERS.forEach((sticker, idx) => {
      for (let pass = 0; pass < 3; pass++) {
        const s = STICKERS[(idx + pass) % STICKERS.length];
        const w = s.w * SCALE;
        const h = s.h * SCALE;
        const rot = (Math.random() - 0.5) * 50;
        const delay = idx * 0.4 + pass * 2.2;
        const dur = 3 + Math.random() * 2;

        const el = document.createElement("div");
        el.style.cssText = `
          position: fixed;
          width: ${w}px;
          height: ${h}px;
          overflow: hidden;
          pointer-events: none;
          z-index: 9997;
          left: ${Math.random() * Math.max(window.innerWidth - w, 10)}px;
          top: -${h + 20}px;
          --rot: ${rot}deg;
          animation: sticker-drop ${dur}s ${delay}s ease-in forwards;
          filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.3));
        `;

        const img = document.createElement("img");
        img.src = "/stickers.png";
        img.style.cssText = `
          position: absolute;
          width: ${IW * SCALE}px;
          height: ${IH * SCALE}px;
          left: -${s.x * SCALE}px;
          top: -${s.y * SCALE}px;
          display: block;
        `;

        el.appendChild(img);
        document.body.appendChild(el);
        created.push(el);
        setTimeout(() => el.remove(), (dur + delay + 0.5) * 1000);
      }
    });

    return () => created.forEach((el) => el.remove());
  }, []);

  return (
    <style>{`
      @keyframes sticker-drop {
        0%   { transform: translateY(0) rotate(var(--rot)); opacity: 1; }
        85%  { opacity: 1; }
        100% { transform: translateY(110vh) rotate(var(--rot)); opacity: 0.6; }
      }
    `}</style>
  );
}
