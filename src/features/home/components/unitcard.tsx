import Image from "next/image";
import Link from "next/link";

interface Props {
  pub_url: string;
  title: string;
  logo_url: string;
  slug: string;
}

export default function UnitCard({ pub_url, title, logo_url, slug }: Props) {
  return (
    <Link href={`/units/${slug}`} className="group">
      <div
        className="relative w-72 h-40 rounded-md shadow-md bg-cover bg-center transition-transform hover:scale-105 duration-300"
        style={{ backgroundImage: `url(${pub_url})` }}
      >
        <div className="absolute inset-0 rounded-md border-2 opacity-50" />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-md" />

        <div className="relative top-0 flex flex-col justify-between h-full p-2">
          <Image
            src={logo_url}
            alt="draft logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <h3 className="text-md font-bold font-sans text-right">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
