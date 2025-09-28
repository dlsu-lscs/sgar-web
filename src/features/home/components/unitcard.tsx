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
  logo_alt,
}: Props) {
  return (
    <Link
      href={`/units/${slug}`}
      className="group relative block transition-colors"
    >
      <div
        className="relative w-72 h-40 rounded-md shadow-md bg-cover bg-center transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${pub_url})` }}
      >
        <div className="absolute inset-0 rounded-md border-2 opacity-50" />
        <div className="absolute inset-0 bg-black opacity-70 rounded-md transition-opacity duration-300 group-hover:opacity-0" />

        <div className="relative flex flex-col justify-between h-full p-2">
          <Image
            src={logo_url}
            alt={logo_alt}
            width={60}
            height={60}
            className="object-contain"
          />
          <h3 className="text-md font-bold font-sans text-right transition-opacity duration-300 group-hover:opacity-0">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
