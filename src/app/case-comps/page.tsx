import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Case Comps" };

const trophies = [
  { label: "marriott school\nof business", href: "/case-comps/marriott" },
  { label: "cotopaxi",                     href: "/case-comps/cotopaxi" },
  { label: "AI",                           href: "/case-comps/ai" },
];

export default function CaseCompsPage() {
  return (
    <main className="min-h-screen bg-white px-16 py-10">
      <Link href="/#wyd" className="text-sm text-neutral-400 hover:text-neutral-800 transition-colors">
        ← back
      </Link>

      <h1 className="font-mono font-bold text-3xl text-center mt-16 mb-20">
        i thought you&apos;d never ask
      </h1>

      {/* Trophies */}
      <div className="flex justify-around max-w-3xl mx-auto mb-24">
        {trophies.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="flex flex-col items-center gap-3 group"
          >
            <span className="text-8xl group-hover:scale-110 transition-transform duration-150 inline-block">
              🏆
            </span>
            <span className="font-mono font-bold text-sm text-center whitespace-pre-line leading-snug">
              {t.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Photo + annotation */}
      <div className="flex justify-center w-full">
      <div className="relative flex items-center gap-8">
        <div className="w-[650px] h-[540px] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/case-comps/JPEG image.jpeg"
            alt="Case competition"
            width={650}
            height={540}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <p className="font-mono font-bold text-[#e879a0] text-lg leading-snug">
          how happy problem<br />solving makes me
        </p>

        {/* Arrow from face to text */}
        <svg
          className="absolute inset-0 pointer-events-none overflow-visible"
          width="850"
          height="540"
          viewBox="0 0 850 540"
          fill="none"
        >
          <line
            x1="480" y1="195" x2="680" y2="272"
            stroke="#e879a0"
            strokeWidth="2"
          />
        </svg>
      </div>
      </div>
    </main>
  );
}
