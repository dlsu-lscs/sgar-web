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
    <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">
      Unit: {slug}
      {Object.keys(query).length > 0 && (
        <div className="mt-4 text-lg">
          Query params: {JSON.stringify(query)}
        </div>
      )}
    </div>
  );
}
