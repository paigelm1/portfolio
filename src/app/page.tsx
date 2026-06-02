import Link from "next/link";
import FolderIcon from "@/components/FolderIcon";

const folders = [
  { label: "case competitions\n(don't click)", href: "/case-comps",                               left: "10%", top: "18%", external: false },
  { label: "design\nproposals",                href: "/design-proposals",                          left: "59%", top: "5%",  external: false },
  { label: "events @\nLeland",                 href: "/events-at-leland",                          left: "82%", top: "17%", external: false },
  { label: "socials",                          href: "/socials",                                   left: "35%", top: "54%", external: false },
  { label: "hostess",                          href: "/hostess",                                   left: "14%", top: "64%", external: false },
  { label: "u speak\nitalian?",                href: "/u-speak-italian",                           left: "70%", top: "59%", external: false },
  { label: "linkedin",                         href: "https://www.linkedin.com/in/paigemortensen/", left: "33%", top: "10%", external: true  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-screen flex overflow-hidden bg-black">
        <div className="relative w-1/2 h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="w-1/2 h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-left"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none gap-1">
          <span className="text-white text-2xl font-light tracking-wide">
            big
          </span>
          <h1 className="font-anton text-[17vw] leading-none text-white uppercase tracking-tight">
            marketer
          </h1>
          <p className="text-white italic text-lg tracking-[0.3em] uppercase mt-1">
            Irvine, California
          </p>
        </div>
      </section>

      {/* ── wyd? section ── */}
      <section id="wyd" className="relative bg-white min-h-screen">
        {/* "wyd?" background text */}
        <span
          className="absolute font-barlow italic font-extrabold leading-none text-black pointer-events-none select-none"
          style={{
            fontSize: "10vw",
            left: "50%",
            top: "44%",
            transform: "translate(-50%, -50%)",
          }}
        >
          wyd?
        </span>

        {/* Folder links */}
        {folders.map((f) => {
          const className = "absolute flex flex-col items-center gap-1.5 group w-[150px]";
          const inner = (
            <>
              <div className="transition-transform duration-150 group-hover:scale-105">
                <FolderIcon size={150} />
              </div>
              <span className="text-[16px] font-medium text-neutral-800 text-center leading-snug whitespace-pre-line">
                {f.label}
              </span>
            </>
          );
          return f.external ? (
            <a key={f.href} href={f.href} target="_blank" rel="noopener noreferrer" className={className} style={{ left: f.left, top: f.top }}>
              {inner}
            </a>
          ) : (
            <Link key={f.href} href={f.href} className={className} style={{ left: f.left, top: f.top }}>
              {inner}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
