"use client";

import { useEffect } from "react";

export default function AutoPlayMusic() {
  useEffect(() => {
    // Remove "hasVisited" from browser console with: localStorage.removeItem("hasVisited")
    if (localStorage.getItem("hasVisited")) return;
    localStorage.setItem("hasVisited", "true");

    const play = () => {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube.com/embed/CZXLLMbJdZ4?autoplay=1&mute=0";
      iframe.allow = "autoplay; encrypted-media";
      iframe.style.cssText =
        "position:fixed;bottom:0;right:0;width:1px;height:1px;opacity:0.01;border:none;pointer-events:none;";
      document.body.appendChild(iframe);

      window.removeEventListener("click", play);
      window.removeEventListener("scroll", play);
      window.removeEventListener("touchstart", play);
    };

    window.addEventListener("click", play, { once: true });
    window.addEventListener("scroll", play, { once: true });
    window.addEventListener("touchstart", play, { once: true });

    return () => {
      window.removeEventListener("click", play);
      window.removeEventListener("scroll", play);
      window.removeEventListener("touchstart", play);
    };
  }, []);

  return null;
}
