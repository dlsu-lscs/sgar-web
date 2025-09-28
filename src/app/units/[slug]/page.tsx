export const revalidate = 60;

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
