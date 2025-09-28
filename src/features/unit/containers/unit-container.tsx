import UnitDesc from "@/features/unit/components/unit/unit-details";
import ExecBoard from "@/features/unit/components/unit/exec";
import Committee from "@/features/unit/components/unit/committee";
import Application from "@/features/unit/components/unit/application";
import UnitTitle from "@/features/unit/components/unit_title";
import { AiOutlineLoading } from "react-icons/ai";
import { getUnitById, getImageAsDataUrl } from "@/services/units.services";

type UnitContainerProps = {
  id: number;
};

export default async function UnitContainer({ id }: UnitContainerProps) {
  const unit = await getUnitById(id);
  const [main_pub, logo_pub] = await Promise.all([
    unit["main-pub"]?.url
      ? getImageAsDataUrl(unit["main-pub"].url)
      : Promise.resolve(null),
    unit.logo?.url ? getImageAsDataUrl(unit.logo.url) : Promise.resolve(null),
  ]);
  return (
    <>
      <UnitTitle name={unit["unit-name"]} />
      <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col relative items-top justify-center gap-15">
        <UnitDesc unit={unit} main_pub={main_pub} logo={logo_pub} />
        <ExecBoard />
        <Committee />
        <Application />
      </div>
    </>
  );
}
