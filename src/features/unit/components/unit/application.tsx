export default function Application() {
  const description =
    "1. here is desc one\n2. here is desc two\n3. here is desc three";

  const timelineDescription =
    "September 1, 2025: Application period opens.\nOctober 31, 2025: Deadline for submission of applications.\nNovember 15-30, 2025: Interview period.\nDecember 15, 2025: Announcement of results.";

  return (
    <div className="flex relative flex-col gap-1 mt-5 items-center w-full justify-center">
      <div className="w-full h-20 text-3xl text-center uppercase font-bold">
        HOW TO APPLY
      </div>

      <div className="w-[60%] h-full rounded-sm flex flex-col items-start relative mb-8">
        <h1 className="font-bold mb-2 text-2xl">APPLICATION PROCESS</h1>
        <p className="text-left whitespace-pre-line">{description}</p>
      </div>

      <div className="w-[60%] h-full rounded-sm  flex flex-col items-start relative mb-8">
        <h1 className="font-bold mb-2 text-2xl">APPLICATION TIMELINE</h1>
        <div className="text-left w-full">
          {timelineDescription.split("\n").map((line, index) => {
            const parts = line.split(/:(.*)/);
            const date = parts[0];
            const event = parts[1];

            return (
              <p key={index}>
                <span className="font-bold">{date}:</span>
                <span>{event}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-[60%] h-full rounded-sm  flex flex-col items-start relative mb-50">
        <h1 className="font-bold mb-2 text-2xl">SPECIAL REQUIREMENTS</h1>
      </div>
    </div>
  );
}
