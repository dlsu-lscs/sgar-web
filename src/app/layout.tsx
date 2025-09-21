import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/home/components/navbar";
import Footer from "@/features/home/components/footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SGAR 2025",
  description:
    "SGAR 2025 is a weeklong university-wide event enticing students to join various student government units.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-center bg-contain bg-repeat bg-[url('/assets/bg.webp')] ${fontSans.className} antialiased relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
