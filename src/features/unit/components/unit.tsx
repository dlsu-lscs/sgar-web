import UnitDesc from "./unit/unit-details";
import ExecBoard from "./unit/exec";
import Committee from "./unit/committee";
import Application from "./unit/application";

export default function Unit() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col relative items-top justify-center gap-15">
      <UnitDesc />
      <ExecBoard />
      <Committee />
      <Application />
    </div>
  );
}
