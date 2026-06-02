"use client";

import { useState, useEffect } from "react";

const FRAMES = [
  { left: "/videos/video1.mp4", right: "/videos/video2.mp4" },
  { left: "/videos/video3.mp4", right: "/videos/video4.mp4" },
  { left: "/videos/video5.mp4", right: "/videos/video6.mp4" },
];

export default function HeroVideos() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Left side */}
      <div className="relative w-1/2 h-full">
        {FRAMES.map(({ left }, i) => (
          <video
            key={`left-${i}`}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-none"
            style={{ zIndex: i === frame ? 10 : 0 }}
          >
            <source src={left} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 20 }} />
      </div>

      {/* Right side */}
      <div className="relative w-1/2 h-full">
        {FRAMES.map(({ right }, i) => (
          <video
            key={`right-${i}`}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-left transition-none"
            style={{ zIndex: i === frame ? 10 : 0 }}
          >
            <source src={right} type="video/mp4" />
          </video>
        ))}
      </div>
    </>
  );
}
