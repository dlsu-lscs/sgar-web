import UnitDesc from "./unit/unit-details";
import ExecBoard from "./unit/exec";

export default function Unit() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col relative items-top justify-center gap-10">
      <UnitDesc />
      <ExecBoard />
    </div>
  );
}
