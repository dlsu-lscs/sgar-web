interface Params {
  slug: string;
}

interface UnitPageProps {
  params: Promise<Params>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function UnitPage({ params }: UnitPageProps) {
  const { slug } = await params;
  return (
    <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">
      Unit: {slug}
    </div>
  );
}
