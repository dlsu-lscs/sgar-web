import UnitDesc from "./unit/unit-details";

export default function Unit() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-200 flex relative flex-row items-top justify-center gap-5">
      <UnitDesc />
    </div>
  );
}
