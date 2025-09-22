import Image from "next/image";
import ImageBox from "./unit/image-box";
import { Button } from "@/components/ui/button";
import lscs from "../data/placeholder";

export default function Unit() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-200 flex relative flex-row items-top px-40 gap-5">
      <div className="w-70 h-120">
        {/* application period box */}
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5">
          <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
          <p className="text-sm">OCT 69, 2025</p>
        </div>

        {/* organizational chart box */}
        <div className="w-full h-full border-2 border-white items-center text-left  relative flex flex-col">
          <div className="w-full h-10 border-1 border-white font-bold text-sm text-center justify-center flex items-center overflow-hidden z-10">
            ORGANIZATIONAL CHART
          </div>

          {/* organizational chart pub component */}
          <ImageBox
            src="/assets/lscs_mainpub.webp"
            alt="Organizational Chart"
          />
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
          <ImageBox
            src="/assets/lscs_mainpub.webp"
            alt="Organizational Chart"
          />
        </div>
      </div>
    </div>
  );
}
