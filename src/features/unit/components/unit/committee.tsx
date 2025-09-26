import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Committee() {
  const committees = [
    "Finance",
    "Events",
    "Membership",
    "IT",
    "Logistics",
    "Documentation and Logistics",
  ];

  return (
    <div className="flex relative flex-row gap-5 items-center w-full justify-center">
      <div className="sm:w-250 w-full h-100 px-5 sm:px-0 relative">
        <div className="w-full border-2 h-full border-white rounded-sm p-5 flex flex-col items-center text-center">
          <p className="font-bold mb-5">COMMITTEES</p>

          {/* grid responsive update with equal heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full items-stretch">
            {committees.map((c, i) => (
              <Dialog modal key={i}>
                <DialogTrigger
                  className="flex h-full w-full items-center justify-center
                  bg-[#171717] text-center whitespace-normal break-words 
                  leading-tight border border-white 
                  hover:bg-white/10 transition-colors duration-200  
                  rounded-sm hover:cursor-pointer"
                >
                  {c}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl">{c}</DialogTitle>
                  </DialogHeader>
                  <h3 className="font-bold">Positions Open: 3</h3>
                  <div className="mt-3">
                    The Human Resources Committee of the Office of the Executive
                    Secretary focuses on managing internal processes related to
                    officer welfare and governance. It ensures the
                    implementation of systems and procedures for effective
                    communication, grievance handling, and officer support. The
                    committee also manages administrative tasks, such as
                    documentation and reporting, while fostering a supportive
                    environment that enhances the well-being and productivity of
                    elected officers.
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
