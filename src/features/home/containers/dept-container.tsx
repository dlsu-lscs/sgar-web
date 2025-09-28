import Dept from "@/features/home/components/department";
import DeptTop from "@/features/home/components/department-top";
import { getUnitsWithImages, UnitWithImages } from "@/services/units.services";

export default async function DeptContainer() {
  const docs: UnitWithImages[] = await getUnitsWithImages();

  const clusters = docs.reduce(
    (acc: Record<string, UnitWithImages[]>, unit) => {
      const clusterName = unit.cluster?.["cluster-name"] || "Uncategorized";
      (acc[clusterName] ??= []).push(unit);
      return acc;
    },
    {},
  );

  const delays = [3000, 5000, 7000];

  return (
    <div className="relative flex flex-col">
      <DeptTop name="CABINET" delay={3000} units={clusters["Cabinet"] ?? []} />

      {Object.entries(clusters)
        .filter(([clusterName]) => clusterName.toLowerCase() !== "cabinet")
        .map(([clusterName, units], idx) => (
          <Dept
            key={clusterName}
            name={clusterName.toUpperCase()}
            delay={delays[idx % delays.length]}
            units={units}
          />
        ))}
    </div>
  );
}
