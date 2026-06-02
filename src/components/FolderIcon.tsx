import Image from "next/image";

export default function FolderIcon({ size = 100 }: { size?: number }) {
  return (
    <Image
      src="/folder-icon.png"
      alt="folder"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}
