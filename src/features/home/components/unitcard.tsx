import Image from "next/image";
import Link from "next/link";

interface Props {
  pub_url: string;
  title: string;
  logo_url: string;
  slug: string;
  pub_alt: string;
  logo_alt: string;
}

export default function UnitCard({
  pub_url,
  title,
  logo_url,
  slug,
  pub_alt,
  logo_alt,
}: Props) {
  return (
    <Link
      href={`/units/${slug}`}
      className="group relative block w-62 h-50 rounded-md overflow-hidden shadow-md"
    >
      <div className="relative w-full h-full">
        <Image
          src={pub_url}
          alt={pub_alt}
          fill
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 rounded-md border-2 opacity-50 pointer-events-none" />

        <div className="absolute inset-0 bg-black opacity-0 rounded-md transition-opacity duration-300 group-hover:opacity-70" />

        <div className="absolute inset-0 flex flex-col justify-between p-2">
          <Image
            src={logo_url}
            alt={logo_alt}
            width={60}
            height={60}
            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <h3 className="text-md font-bold font-sans text-right text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
