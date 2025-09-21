interface UnitPageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function UnitPage({ params }: UnitPageProps) {
  return (
    <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">
      Unit: {params.slug}
    </div>
  );
}
