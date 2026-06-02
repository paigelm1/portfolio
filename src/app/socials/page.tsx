import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Socials" };

export default function SocialsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-10 pt-8">
        <Link href="/#wyd" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← back
        </Link>
      </div>

      {/* she's a social gal */}
      <section className="py-14 flex flex-col items-center gap-8 px-10">
        <h2 className="text-xl tracking-wide">she&apos;s a social gal</h2>
        <a
          href="https://www.instagram.com/urbanarmorgear/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl overflow-hidden w-[320px] border border-neutral-800 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/socials/IMG_3056 2.jpg"
            alt="Social media profile"
            width={320}
            height={560}
            className="w-full h-auto"
          />
        </a>
      </section>

      {/* content creation */}
      <section className="py-14 px-16 flex items-center gap-20 max-w-3xl mx-auto">
        <div className="relative flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/socials/IMG_5684.mp4" type="video/mp4" />
          </video>
        </div>
        <span className="text-xl tracking-wide">content creation</span>
      </section>

      {/* hall of fame */}
      <section className="py-14 flex flex-col items-center gap-8 px-10">
        <h2 className="text-xl tracking-wide">hall of fame</h2>
        <div className="w-full max-w-[1400px] rounded-2xl overflow-hidden">
          <Image
            src="/socials/screenshot-insights.png"
            alt="Insights screenshot"
            width={1400}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* honorable mention */}
      <section className="py-14 flex flex-col items-center gap-6 px-10">
        <h2 className="text-xl font-bold tracking-wide">honorable mention:</h2>
        <p className="text-neutral-400 tracking-wide">accidentally going viral on my personal</p>
        <a
          href="https://www.instagram.com/reel/DSWU42BDkbX/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] rounded-2xl overflow-hidden hover:opacity-80 transition-opacity"
        >
          <Image
            src="/socials/viral-photo.jpg"
            alt="18.3M viral video"
            width={280}
            height={480}
            className="w-full h-auto"
          />
        </a>
      </section>
    </main>
  );
}
