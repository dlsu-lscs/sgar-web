import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/home/components/navbar";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SGAR '25 - '26",
  description:
    "SGAR 2025 is a weeklong university-wide event enticing students to join various student government units.",
  openGraph: {
    title: "SGAR '25 - '26",
    description:
      "SGAR 2025 is a weeklong university-wide event enticing students to join various student government units.",
    url: "https://apply.dlsu-usg.com",
    siteName: "SGAR '25 - '26",
    type: "website",
    images: [
      {
        url: "https://apply.dlsu-usg.com/assets/sgar-og.png",
        width: 1200,
        height: 630,
        alt: "SGAR 2025 Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SGAR '25 - '26",
    description:
      "SGAR 2025 is a weeklong university-wide event enticing students to join various student government units.",
    images: ["https://apply.dlsu-usg.com/assets/sgar-og.png"],
    site: "@dlsu_sgar",
    creator: "@dlsu_usg",
  },
  icons: [{ rel: "icon", url: "/assets/sgar_logo2.webp", type: "image/webp" }],
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
