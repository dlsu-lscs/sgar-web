import Image from "next/image";
import { Button } from "@/components/ui/button";
import lscs from "../data/placeholder";

export default function Unit() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-200 flex relative flex-row items-top px-40">
      <div className="w-70 h-120">
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5">
          <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
          <p className="text-sm">OCT 69, 2025</p>
        </div>

        <div className="w-full h-full border-2 border-white items-center text-left  relative flex flex-col">
          <div className="w-full h-10 border-1 border-white font-bold text-center justify-center flex items-center overflow-hidden z-10">
            ORGANIZATIONAL CHART
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/assets/lscs_mainpub.webp"
              fill
              alt="Organizational Chart"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 items-center flex justify-center" />
          </div>
        </div>
      </div>
      <div className="w-70 h-102" />
    </div>
  );
}
