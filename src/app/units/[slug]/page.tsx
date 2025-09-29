export const revalidate = 60;

import { getAllUnits } from "@/services/units.services";

export async function generateStaticParams() {
  try {
    const units = await getAllUnits();
    return units.filter((u) => u.slug).map((u) => ({ slug: u.slug as string }));
  } catch (error) {
    console.error("generateStaticParams error:", error);
    return [];
  }
}

import Navbar from "@/features/home/components/navbar";
import UnitContainer from "@/features/unit/containers/unit-container";
import Footer from "@/features/home/components/footer";

type Params = Promise<{ slug: string }>;

export default async function UnitPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col">
        <UnitContainer slug={slug} />
        <Footer />
      </div>
    </>
  );
}
