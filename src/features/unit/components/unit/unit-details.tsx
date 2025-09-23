import ImageBox from "./image-box";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import lscs from "../../data/placeholder";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";

export default function UnitDesc() {
  return (
    <div className="flex sm:flex-row relative flex-col gap-5 align-center items-center justify-center w-full">
      <div className="sm:w-80 w-full sm:h-145 px-5 sm:px-0 relative">
        {/* application period box */}
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5 hidden sm:block">
          <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
          <p className="text-sm">OCT 29, 2025</p>
        </div>

        {/* organizational chart box */}
        <div className="w-full h-120 border-2 rounded-sm border-white items-center text-left  relative flex flex-col">
          <div className="w-full h-10 border-1 border-white text-sm text-center justify-center flex items-center overflow-hidden z-10">
            ORGANIZATIONAL CHART
          </div>
          {/* organizational chart pub component */}
          <Dialog modal>
            <DialogTrigger asChild className="cursor-pointer w-full h-full">
              <ImageBox src={lscs.pub_url} alt="Organizational Chart" />
            </DialogTrigger>
            <VisuallyHidden.Root asChild>
              <DialogTitle />
            </VisuallyHidden.Root>
            <DialogContent className="border-none bg-transparent">
              <Image
                src={lscs.pub_url}
                width={500}
                height={500}
                alt={"Organizational Chart"}
                className="object-cover"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="sm:w-150 sm:h-145 px-5 sm:px-0 relative order-first sm:order-none">
        {/* unit description section */}
        <div className="w-full h-[50%] border-2 border-white rounded-md items-center text-left p-5 mb-5">
          <h3 className="font-bold mb-3">UNIT DESCRIPTION</h3>
          <p className="text-sm">{lscs.description} </p>
        </div>
        <div className="w-full h-67 border-2 border-white rounded-md items-center text-left mb-5">
          {/* main pub component */}
          <Dialog modal>
            <DialogTrigger asChild className="cursor-pointer w-full h-full">
              <ImageBox src={lscs.pub_url} alt="Organizational Chart" />
            </DialogTrigger>
            <VisuallyHidden.Root asChild>
              <DialogTitle />
            </VisuallyHidden.Root>
            <DialogContent className="border-none bg-transparent">
              <Image
                src={lscs.pub_url}
                width={500}
                height={500}
                alt={"Organizational Chart"}
                className="object-cover"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="sm:w-80 sm:h-145 w-full px-5 sm:px-0 relative">
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
        <div className="w-full sm:h-75 h-80 border-2 border-white rounded-md items-center text-left mb-5 justify-center flex flex-col gap-5">
          <Image
            src={lscs.logo_url}
            alt="Unit Logo Image"
            width={200}
            height={200}
            className="object-contain"
          />
          UNIT LOGO
        </div>
        {/* application period box (HIDDEN IN DESKTOP VIEW)*/}
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5 block sm:hidden">
          <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
          <p className="text-sm">OCT 29, 2025</p>
        </div>
        <div className="w-full h-40 border-2 border-white rounded-md items-center text-left mb-5 justify-center flex flex-col gap-3">
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
