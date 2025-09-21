interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function UnitPage({ params }: PageProps) {
  return (
    <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">
      Unit: {params.slug}
    </div>
  );
}
