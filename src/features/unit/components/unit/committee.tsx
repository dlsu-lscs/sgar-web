import { Button } from "@/components/ui/button";

export default function Committee() {
  const committees = [
    "Finance",
    "Events",
    "Membership",
    "IT",
    "Logistics",
    "Integrated Marketing Communications",
  ];

  return (
    <div className="flex relative flex-row gap-5 items-center w-full">
      <div className="sm:w-80 w-full px-5 sm:px-0 relative">
        <div className="w-full border-2 border-white rounded-sm p-5 flex flex-col items-center text-center">
          <p className="font-bold mb-5">COMMITTEES</p>

          {/* grid: 2 per row, rows expand to tallest button */}

          <div className="grid grid-cols-2 gap-4 w-full items-stretch">
            {committees.map((c, i) => (
              <Button
                key={i}
                className="w-full justify-center text-center whitespace-normal break-words leading-tight border border-white hover:bg-white/10 rounded-sm"
              >
                {c}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:w-80 w-full px-5 sm:px-0 relative">
        <div className="w-full border-2 border-white rounded-md p-5 flex flex-col items-center text-center">
          test
        </div>
      </div>
    </div>
  );
}
