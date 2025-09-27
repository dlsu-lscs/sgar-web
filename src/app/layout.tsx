import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/home/components/navbar";
import { QueryProvider } from "@/providers/query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`min-h-screen bg-center bg-contain bg-repeat bg-[url('/assets/bg.webp')] ${fontSans.className} ${fontSans.variable} antialiased relative`}
      >
        <QueryProvider>
          <Navbar />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
