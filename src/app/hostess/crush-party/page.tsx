import Link from "next/link";

export const metadata = { title: "Crush Party" };

export default function CrushPartyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-10">
      <Link href="/hostess" className="text-sm text-neutral-500 hover:text-white transition-colors">
        ← back
      </Link>
      <h1 className="text-4xl font-bold mt-10 mb-6" style={{ color: "#ff2200" }}>
        crush party 🙈
      </h1>
      <div className="w-full h-px bg-neutral-800 mb-8" />
      <p className="text-neutral-400 text-sm">Content coming soon.</p>
    </main>
  );
}
