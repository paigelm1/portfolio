import Link from "next/link";

export const metadata = { title: "AI" };

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white px-16 py-10">
      <Link href="/case-comps" className="text-sm text-neutral-400 hover:text-neutral-800 transition-colors">
        ← back
      </Link>
      <h1 className="font-mono font-bold text-[60px] leading-none mt-10 mb-6">
        AI
      </h1>
      <div className="w-full h-px bg-neutral-200 mb-8" />
      <p className="text-neutral-400 text-sm">Content coming soon.</p>
    </main>
  );
}
