import Link from "next/link";

export const metadata = { title: "Hostess" };

export default function HostessPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="px-10 pt-8">
        <Link href="/#wyd" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex items-start justify-around pt-12 px-10">

        {/* Left — JFK party */}
        <a href="https://universe.byu.edu/metro/byu-student-hosts-jfk-jr-celebrity-look-alike-contest-in-salt-lake-city" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
          <p className="text-[#ff2200] text-2xl font-bold mb-4 text-center">
            calling all JFK JR&apos;s
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hostess/jfk-photo.png"
            alt="Calling all JFK JRs"
            className="w-[420px] group-hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Right — Crush party */}
        <Link href="/hostess/crush-party" className="flex flex-col items-center gap-8 pt-4 group">
          <div className="border-2 border-purple-500 px-6 py-3">
            <span className="text-[#ff2200] text-2xl font-bold">crush party</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hostess/monkey.png"
            alt="Crush party"
            className="w-[560px] group-hover:opacity-80 transition-opacity"
          />
        </Link>

      </div>
    </main>
  );
}
