import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// This is the Silicon Valley standard font setup for 2026
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Aziz | B2B Marketer",
  description: "Growth engines and systems in Tunis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="selection:bg-zinc-100">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-zinc-950`}>
        {/* We use a max-width of 2xl to give it that "premium essay" feel */}
        <main className="max-w-2xl mx-auto px-6 pt-24 pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}