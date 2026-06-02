import Link from "next/link";
import FolderIcon from "@/components/FolderIcon";

export const metadata = { title: "Hostess" };

export default function HostessPage() {
  return (
    <main className="min-h-screen bg-white px-12 py-10">
      <Link href="/#wyd" className="text-sm text-neutral-400 hover:text-neutral-800 transition-colors">
        ← back
      </Link>
      <div className="mt-10 flex flex-col items-start gap-5 max-w-4xl">
        <FolderIcon size={120} />
        <h1 className="font-anton text-[72px] leading-none uppercase text-neutral-900">
          Hostess
        </h1>
        <div className="w-full h-px bg-neutral-200" />
        <p className="text-neutral-400 text-sm">Content coming soon.</p>
      </div>
    </main>
  );
}
