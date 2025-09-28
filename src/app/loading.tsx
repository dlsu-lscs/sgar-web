"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        return old + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[var(--card-tertiary-foreground)] text-white">
      <Image
        src="/assets/sgar_logo2.webp"
        alt="SGAR Logo 2"
        width={250}
        height={250}
        className="object-contain"
      />
      <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin mb-6" />
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-white transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-lg font-medium">{progress}%</div>
    </div>
  );
}
