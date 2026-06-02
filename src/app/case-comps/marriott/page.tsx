import Link from "next/link";

export const metadata = { title: "Marriott School of Business" };

export default function MarriottPage() {
  return (
    <main className="min-h-screen bg-white px-16 py-10">
      <Link href="/case-comps" className="text-sm text-neutral-400 hover:text-neutral-800 transition-colors">
        ← back
      </Link>
      <h1 className="font-mono font-bold text-[60px] leading-none mt-10 mb-6">
        Marriott School<br />of Business
      </h1>
      <div className="w-full h-px bg-neutral-200 mb-8" />
      <p className="text-neutral-400 text-sm">Content coming soon.</p>
    </main>
  );
}
