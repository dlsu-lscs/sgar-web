import ImageBox from "./unit/image-box";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import lscs from "../data/placeholder";

export default function Unit() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-200 flex relative flex-row items-top justify-center gap-5">
      <div className="w-80 h-145 relative">
        {/* application period box */}
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5">
          <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
          <p className="text-sm">OCT 69, 2025</p>
        </div>

        {/* organizational chart box */}
        <div className="w-full h-120 border-2 border-white items-center text-left  relative flex flex-col">
          <div className="w-full h-10 border-1 border-white font-bold text-sm text-center justify-center flex items-center overflow-hidden z-10">
            ORGANIZATIONAL CHART
          </div>

          {/* organizational chart pub component */}
          <ImageBox src={lscs.pub_url} alt="Organizational Chart" />
        </div>
      </div>
      <div className="w-150 h-145 relative">
        {/* unit description section */}
        <div className="w-full h-[50%] border-2 border-white rounded-md items-center text-left p-5 mb-5">
          <h3 className="font-bold mb-3">UNIT DESCRIPTION</h3>
          <p className="text-sm">{lscs.description} </p>
        </div>
        <div className="w-full h-67 border-2 border-white rounded-md items-center text-left mb-5">
          {/* main pub component */}
          <ImageBox src={lscs.pub_url} alt="Organizational Chart" />
        </div>
      </div>
      <div className="w-80 h-145 relative">
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-2 mb-5 flex flex-row">
          <Image
            src="/assets/sgar_logo2.webp"
            alt="SGAR logo"
            width={70}
            height={70}
          />
          <div className="flex flex-col text-xs ml-4">
            <p className="font-bold">CLUSTER</p>
            <p>{lscs.cluster}</p>
          </div>
        </div>
        <div className="w-full h-67 border-2 border-white rounded-md items-center text-left mb-5 justify-center flex">
          <Image
            src={lscs.logo_url}
            alt="Unit Logo Image"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="w-full h-47 border-2 border-white rounded-md items-center text-left mb-5 justify-center flex flex-col gap-3">
          <p className="font-bold">APPLICATION FORM</p>
          <Button
            asChild
            className="border border-white px-16 hover:bg-white/10"
          >
            <Link href="/login">APPLY NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
