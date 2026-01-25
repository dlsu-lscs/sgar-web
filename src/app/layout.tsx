import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const star7 = localFont({
  src: "../../public/fonts/STAR7.ttf",
  variable: "--font-star7",
});

const fontGordita = localFont({
  src: "../../public/fonts/Gordita-Regular.otf",
  variable: "--font-gordita-reg",
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
  icons: [
    {
      rel: "icon",
      url: "../../public/assets/sgar2_logo",
      type: "image/webp",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`min-h-screen bg-center bg-contain bg-repeat bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('/assets/bg2.webp')] ${fontGordita.className} ${fontGordita.variable} antialiased relative`}
      >
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />

        {children}
      </body>
    </html>
  );
}
