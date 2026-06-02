import Link from "next/link";

export const metadata = { title: "Events @ Leland" };

export default function EventsAtLelandPage() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-10">
      <Link href="/#wyd" className="text-sm text-neutral-500 hover:text-white transition-colors">
        ← back
      </Link>
      <h1 className="font-anton text-[72px] leading-none uppercase mt-10 mb-12">
        Events @ Leland
      </h1>
      <div className="max-w-4xl">
        <video
          controls
          className="w-full rounded-2xl"
        >
          <source src="/events-at-leland/events.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
