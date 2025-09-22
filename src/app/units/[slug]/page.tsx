import UnitTitle from "@/features/unit/components/unit_title";
import Unit from "@/features/unit/components/unit";
import Footer from "@/features/home/components/footer";

interface Params {
  slug: string;
}

interface UnitPageProps {
  params: Promise<Params>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function UnitPage({
  params,
  searchParams,
}: UnitPageProps) {
  const { slug } = await params;
  const query = searchParams ? await searchParams : {};

  return (
    <>
      <div className="relative flex flex-col">
        <div className="h-20 w-full" />
        <UnitTitle />
        <Unit />
        {/* remove later */}
        <div className="w-full h-60 bg-[var(--card-tertiary-foreground)]"></div>
        <Footer />
      </div>
    </>
  );
}
