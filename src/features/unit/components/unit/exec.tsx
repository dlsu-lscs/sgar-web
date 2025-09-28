import Image from "next/image";
import { ExecBoardMember } from "@/types/units.types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";

interface Props {
  members?: ExecBoardMember[];
}

export default function ExecBoard({ members = [] }: Props) {
  return (
    <div className="flex relative flex-col mt-2 items-center justify-center w-full">
      <div className="w-full h-20 text-3xl text-center font-bold">
        EXECUTIVE BOARD
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-[47.5rem]">
        {members.map((member, i) => (
          <div key={i} className="flex flex-col gap-2 text-center relative">
            <Dialog modal>
              <DialogTrigger asChild>
                <div className="w-50 h-60 relative cursor-pointer group rounded-md border-white border-2 overflow-hidden">
                  <Image
                    src={member.photo?.url ?? "/assets/pfp.webp"}
                    fill
                    alt={member.photo?.alt || member["full-name"]}
                    className="object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out rounded-md" />
                </div>
              </DialogTrigger>
              <VisuallyHidden.Root asChild>
                <DialogTitle />
              </VisuallyHidden.Root>
              <DialogContent className="!border-none !bg-transparent hide-close-button">
                <Image
                  src={member.photo?.url ?? "/assets/pfp.webp"}
                  width={500}
                  height={500}
                  alt={member.photo?.alt || member["full-name"]}
                  className="object-cover rounded-md"
                />
              </DialogContent>
            </Dialog>

            <p className="font-bold text-xs">{member.position}</p>
            <p className="text-xs">{member["full-name"]}</p>
            <p className="text-xs">{member.email}</p>
            <p className="text-xs">{member["telegram-username"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
