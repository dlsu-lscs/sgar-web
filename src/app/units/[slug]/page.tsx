import UnitContainer from "@/features/unit/containers/unit-container";
import Footer from "@/features/home/components/footer";

type UnitPageProps = {
  params: { slug: string };
};

export default async function UnitPage({ params }: UnitPageProps) {
  const { slug } = params;

  return (
    <div className="relative flex flex-col">
      <UnitContainer slug={slug} />
      <Footer />
    </div>
  );
}
