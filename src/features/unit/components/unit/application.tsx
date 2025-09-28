type ApplicationProps = {
  process: string;
  timeline: string;
};

export default function Application({ process, timeline }: ApplicationProps) {
  const processLines = process.split("\n").filter((line) => line.trim() !== "");

  const steps: string[] = [];
  const requirements: string[] = [];

  processLines.forEach((line) => {
    if (/^Step\s*\d+/i.test(line)) {
      steps.push(line.replace(/\t/g, " ").trim());
    } else {
      requirements.push(line.replace(/\t/g, " ").trim());
    }
  });

  const timelineLines = timeline
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <div className="flex relative flex-col gap-6 mt-5 items-center w-full justify-center px-4">
      <div className="w-full text-3xl text-center uppercase font-bold">
        HOW TO APPLY
      </div>

      <div className="w-full sm:w-[60%] h-full rounded-sm flex flex-col items-start relative mb-8">
        <h1 className="font-bold mb-2 text-2xl">APPLICATION PROCESS</h1>
        <div className="text-left w-full space-y-2">
          {steps.map((line, index) => {
            const parts = line.split(/\s+/);
            const stepLabel = parts.shift();
            return (
              <p
                key={index}
                className="leading-relaxed break-words text-justify sm:text-left"
              >
                <span className="font-bold">{stepLabel}:</span>{" "}
                <span>{parts.join(" ")}</span>
              </p>
            );
          })}
        </div>
      </div>

      <div className="w-full sm:w-[60%] h-full rounded-sm flex flex-col items-start relative mb-8">
        <h1 className="font-bold mb-2 text-2xl">APPLICATION TIMELINE</h1>
        <div className="text-left w-full space-y-2">
          {timelineLines.map((line, index) => {
            const parts = line.split(/\t+/);
            const date = parts[0];
            const event = parts[1];
            return (
              <p
                key={index}
                className="leading-relaxed break-words text-justify sm:text-left"
              >
                <span className="font-bold">{date}:</span> <span>{event}</span>
              </p>
            );
          })}
        </div>
      </div>

      <div className="w-full sm:w-[60%] h-full rounded-sm flex flex-col items-start relative mb-8">
        <h1 className="font-bold mb-2 text-2xl">SPECIAL REQUIREMENTS</h1>
        <div className="text-left w-full space-y-2">
          {requirements.length > 0 ? (
            requirements.map((req, index) => (
              <p
                key={index}
                className="leading-relaxed break-words text-justify sm:text-left"
              >
                {req}
              </p>
            ))
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
    </div>
  );
}
