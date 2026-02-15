import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Aziz | B2B Marketer",
  description: "B2B growth systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans antialiased bg-white text-zinc-950">
        <main className="max-w-2xl mx-auto px-6 pt-24 pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}