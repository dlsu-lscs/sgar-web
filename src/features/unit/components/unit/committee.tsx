import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Committee as CommitteeType } from "@/types/units.types";

interface Props {
  committees?: CommitteeType[];
}

export default function Committee({ committees = [] }: Props) {
  return (
    <div className="flex relative flex-row gap-5 items-center w-full justify-center">
      <div className="sm:w-250 w-full h-100 px-5 sm:px-0 relative">
        <div className="w-full border-2 h-full border-white rounded-sm p-5 flex flex-col items-center text-center">
          <p className="font-bold mb-5">COMMITTEES</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full items-stretch">
            {committees.map((committee) => (
              <Dialog modal key={committee.id}>
                <DialogTrigger
                  className="flex h-full w-full items-center justify-center
                  bg-[#171717] text-center whitespace-normal break-words 
                  leading-tight border border-white 
                  hover:bg-white/10 transition-colors duration-200  
                  rounded-sm hover:cursor-pointer"
                >
                  {committee["committee-name"]}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl">
                      {committee["committee-name"]}
                    </DialogTitle>
                  </DialogHeader>

                  <h3 className="font-bold whitespace-pre-line text-md">
                    Positions
                  </h3>

                  <div className=" list-disc list-inside">
                    {committee.position.map((pos) => (
                      <p key={pos.id}>
                        {pos["position-name"]} —{" "}
                        <span
                          className={
                            pos.status === "open"
                              ? "text-green-400"
                              : "text-red-400"
                          }
                        >
                          {pos.status}
                        </span>
                      </p>
                    ))}
                  </div>

                  {committee.description && (
                    <div className="mt-5 text-sm whitespace-pre-line">
                      {committee.description}
                    </div>
                  )}

                  {committee.requirements && (
                    <div className="mt-3 text-sm whitespace-pre-line">
                      <strong>Requirements:</strong> {committee.requirements}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
