import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGAR 2025",
  description: "Website for Student Government Annual Recruitment Week 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background ${fontSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
