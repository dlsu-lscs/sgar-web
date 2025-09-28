import UnitDesc from "@/features/unit/components/unit/unit-details";
import ExecBoard from "@/features/unit/components/unit/exec";
import Committee from "@/features/unit/components/unit/committee";
import Application from "@/features/unit/components/unit/application";
import UnitTitle from "@/features/unit/components/unit_title";
import { ExecBoardMember } from "@/types/units.types";
import { getUnitBySlug, getImageAsDataUrl } from "@/services/units.services";

type UnitContainerProps = {
  slug: string;
};

export default async function UnitContainer({ slug }: UnitContainerProps) {
  const unit = await getUnitBySlug(slug);

  const [main_pub, logo_pub, orgchart_pub] = await Promise.all([
    unit["main-pub"]?.url
      ? getImageAsDataUrl(unit["main-pub"].url)
      : Promise.resolve(null),
    unit.logo?.url ? getImageAsDataUrl(unit.logo.url) : Promise.resolve(null),
    unit["org-chart"]?.url
      ? getImageAsDataUrl(unit["org-chart"].url)
      : Promise.resolve(null),
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
          main_pub={
            main_pub
              ? { url: main_pub, alt: unit["unit-name"] }
              : { url: "/none", alt: "None" }
          }
          logo={
            logo_pub
              ? { url: logo_pub, alt: unit["unit-name"] }
              : { url: "/none", alt: "None" }
          }
          orgchart_pub={
            orgchart_pub
              ? { url: orgchart_pub, alt: unit["unit-name"] }
              : { url: "/none", alt: "None" }
          }
        />
        <ExecBoard members={exec_board} />
        <Committee committees={unit.committees} />
        <Application
          process={unit["application-process"]}
          timeline={unit["application-timeline"]}
        />
      </div>
    </>
  );
}
