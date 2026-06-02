import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "U Speak Italian?" };

export default function USpeakItalianPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-12 pt-10">
        <Link href="/#wyd" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← back
        </Link>
      </div>

      {/* yes, yes i do. */}
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">yes, yes i do.</h1>
      </div>

      {/* Section 1: Italy text + photo */}
      <section className="flex items-center justify-between max-w-4xl mx-auto px-12 pb-24 gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">I lived in Italy for 18 months</p>
          <p className="font-bold text-sm text-center leading-snug">
            teaching people about how to<br />find joy through Christ!
          </p>
        </div>
        <div className="w-[480px] h-[480px] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/u-speak-italian/italy-photo.jpg"
            alt="Italy"
            width={480}
            height={480}
            className="w-full h-full object-cover object-[center_70%]"
          />
        </div>
      </section>

      {/* Section 2: BYU classes */}
      <section className="text-center py-16 px-12">
        <p className="text-xl font-bold leading-snug">
          came back to the states &amp; took some<br />advanced Italian classes at BYU
        </p>
      </section>

      {/* Section 3: Teaching photo + text */}
      <section className="flex items-center justify-between max-w-4xl mx-auto px-12 py-16 gap-16">
        <div className="w-[480px] h-[480px] flex-shrink-0 rounded-lg overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/u-speak-italian/teaching-photo.jpg"
            alt="Teaching ITAL101"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xl font-bold leading-snug">
            and was selected to teach<br />ITAL101 at BYU!
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-20">
        <p className="text-xl font-bold leading-loose">
          i &lt;3  teaching<br />i &lt;3 italian
        </p>
      </div>
    </main>
  );
}
