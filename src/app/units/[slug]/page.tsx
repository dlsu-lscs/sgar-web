interface Props {
  params: { slug: string };
}

export default function UnitPage({ params }: Props) {
  return (
    <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">
      Unit: {params.slug}
    </div>
  );
}
