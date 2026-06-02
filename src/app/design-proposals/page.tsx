"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Typewriter({ text, speed = 80 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Dropdown({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-anton text-5xl uppercase tracking-tight group-hover:text-neutral-300 transition-colors">
          {title}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? "2000px" : "0" }}
      >
        <div className="pb-10">{children}</div>
      </div>
    </div>
  );
}

export default function DesignProposalsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-10">
      <Link href="/#wyd" className="text-sm text-neutral-500 hover:text-white transition-colors">
        ← back
      </Link>
      <h1 className="font-anton text-[72px] leading-none uppercase mt-10 mb-16">
        <Typewriter text="Design Proposals" />
      </h1>
      <div className="max-w-4xl border-t border-neutral-700">
        <Dropdown title="life shop">
          <div className="grid grid-cols-2 gap-4">
            {["PNG image.png", "PNG image 2.png", "PNG image 3.png", "PNG image 4.png"].map((file) => (
              <div key={file} className="rounded-xl overflow-hidden">
                <Image
                  src={`/design-proposals/lifeshop/${file}`}
                  alt={file}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </Dropdown>
        <Dropdown title="touchpoint">
          <div className="grid grid-cols-2 gap-4">
            {["PNG image.png", "PNG image 2.png", "PNG image 3.png", "PNG image 4.png", "PNG image 5.png", "PNG image 6.png", "PNG image 7.png", "PNG image 8.png"].map((file) => (
              <div key={file} className="rounded-xl overflow-hidden">
                <Image
                  src={`/design-proposals/touchpoint/${file}`}
                  alt={file}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </main>
  );
}
