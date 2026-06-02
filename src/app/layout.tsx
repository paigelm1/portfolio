import type { Metadata } from "next";
import { Anton, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Sparkles from "@/components/Sparkles";
import FallingStickers from "@/components/FallingStickers";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton-var",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow-var",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Big marketer, Irvine California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-full">
        <Sparkles />
        {children}
      </body>
    </html>
  );
}
