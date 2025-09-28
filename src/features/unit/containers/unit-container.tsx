import UnitDesc from "@/features/unit/components/unit/unit-details";
import ExecBoard from "@/features/unit/components/unit/exec";
import Committee from "@/features/unit/components/unit/committee";
import Application from "@/features/unit/components/unit/application";
import UnitTitle from "@/features/unit/components/unit_title";
import { AiOutlineLoading } from "react-icons/ai";
import { ExecBoardMember } from "@/types/units.types";
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
  const exec_board: ExecBoardMember[] = await Promise.all(
    unit["executive-board"].map(async (member: ExecBoardMember) => {
      if (member.photo?.url) {
        const data = await getImageAsDataUrl(member.photo.url);
        return {
          ...member,
          photo: {
            ...member.photo,
            url: data ?? "/none",
          },
        };
      }
      return member;
    }),
  );
  return (
    <>
      <UnitTitle name={unit["unit-name"]} />
      <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col relative items-top justify-center gap-15">
        <UnitDesc
          unit={unit}
          main_pub={main_pub ?? "/none"}
          logo={logo_pub ?? "/none"}
        />
        <ExecBoard members={exec_board} />
        <Committee committees={unit.committees} />
        <Application />
      </div>
    </>
  );
}
