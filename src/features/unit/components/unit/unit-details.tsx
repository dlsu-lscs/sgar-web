import ImageBox from "./image-box";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";
import { UnitType } from "@/types/units.types";

type UnitDescProps = {
  unit: UnitType;
  logo: { url: string; alt: string };
  main_pub: { url: string; alt: string };
  orgchart_pub: { url: string; alt: string };
};

export default function UnitDesc({
  unit,
  main_pub,
  logo,
  orgchart_pub,
}: UnitDescProps) {
  const isApplicationLinkAvailable =
    unit["form-link"] && unit["form-link"] !== "no link";

  return (
    <div className="flex sm:flex-row relative flex-col gap-5 align-center items-center justify-center w-full">
      <div className="sm:w-80 w-full sm:h-145 px-5 sm:px-0 relative">
        <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5 hidden sm:block">
          <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
          <p className="text-sm">OCT 4, 2025</p>
        </div>

        <div className="w-full h-120 border-2 rounded-sm border-white items-center text-left  relative flex flex-col">
          <div className="w-full h-10 border-1 border-white text-sm text-center justify-center flex items-center overflow-hidden z-10">
            ORGANIZATIONAL CHART
          </div>
          <Dialog modal>
            <DialogTrigger asChild className="cursor-pointer w-full h-full">
              <ImageBox src={orgchart_pub.url} alt={orgchart_pub.alt} />
            </DialogTrigger>
            <VisuallyHidden.Root asChild>
              <DialogTitle />
            </VisuallyHidden.Root>

            <DialogContent className="!p-0 !m-0 bg-transparent border-none outline-none hide-close-button sm:min-w-5xl max-h-[90vh] flex items-center justify-center">
              <Image
                src={orgchart_pub.url}
                alt={orgchart_pub.alt}
                width={1100}
                height={700}
                className="rounded-md object-contain w-full h-auto sm:max-w-4xl"
                sizes="(max-width: 640px) 100vw, 80vw"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="sm:w-150 sm:h-145 px-5 sm:px-0 relative order-first sm:order-none">
        <div className="w-full h-[50%] border-2 border-white rounded-md text-left p-5 mb-5 flex flex-col">
          <h3 className="font-bold mb-3">UNIT DESCRIPTION</h3>
          <div className="flex-1 min-h-0 overflow-y-auto pr-3 subtle-scrollbar">
            <p className="text-sm whitespace-pre-line">{unit.description}</p>
          </div>
        </div>
        <div className="w-full h-67 border-2 border-white rounded-md items-center text-left mb-5">
          <Dialog modal>
            <DialogTrigger asChild className="cursor-pointer w-full h-full">
              <ImageBox src={main_pub.url} alt={main_pub.alt} />
            </DialogTrigger>
            <VisuallyHidden.Root asChild>
              <DialogTitle />
            </VisuallyHidden.Root>
            <DialogContent className="!p-0 !bg-transparent !border-none hide-close-button outline-none">
              <Image
                src={main_pub.url}
                alt={main_pub.alt}
                width={500}
                height={500}
                className="rounded-md object-contain"
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
            <p>{unit.cluster["cluster-name"]}</p>
          </div>
        </div>

        <div className="sm:w-80 sm:h-145 w-full px-5 sm:px-0 relative">
          <div className="w-full sm:h-75 h-80 border-2 border-white rounded-md items-center text-left mb-5 justify-center flex flex-col gap-5">
            <Image
              src={logo.url}
              alt={logo.alt}
              width={200}
              height={200}
              className="object-contain"
            />
            UNIT LOGO
          </div>
          <div className="w-full h-20 border-2 border-white rounded-md items-center text-left p-5 mb-5 block sm:hidden">
            <p className="font-bold text-sm">APPLICATIONS OPEN UNTIL</p>
            <p className="text-sm">OCT 4, 2025</p>
          </div>
          <div className="w-full h-40 border-2 border-white rounded-md items-center text-left mb-5 justify-center flex flex-col gap-3">
            <p className="font-bold">APPLICATION FORM</p>
            <Button
              asChild
              className="border border-white px-16 hover:bg-white/10"
              disabled={!isApplicationLinkAvailable}
            >
              <Link href={isApplicationLinkAvailable ? unit["form-link"] : "#"}>
                APPLY NOW
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
