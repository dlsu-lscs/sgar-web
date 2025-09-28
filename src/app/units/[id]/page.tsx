import UnitContainer from "@/features/unit/containers/unit-container";
import Footer from "@/features/home/components/footer";

type UnitPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UnitPage({ params }: UnitPageProps) {
  const { id } = await params;

  return (
    <div className="relative flex flex-col">
      <UnitContainer id={Number(id)} />
      <Footer />
    </div>
  );
}
