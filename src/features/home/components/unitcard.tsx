import Image from "next/image";

interface Props {
  pub_url: string;
  title: string;
  logo_url: string;
}

export default function UnitCard({ pub_url, title, logo_url }: Props) {
  return (
    <div
      className="relative w-72 h-40 rounded-md shadow-md rounded-md bg-cover bg-center"
      style={{ backgroundImage: `url(${pub_url})` }}
    >
      <div className={`absolute inset-0 rounded-md border-2 opacity-50`} />

      {/* increase opacity when needed */}
      <div className="absolute inset-0 bg-black opacity-70 rounded-md" />

      <div className="relative top-0 flex flex-col justify-between h-full p-2">
        <Image
          src={logo_url}
          alt={"draft logo"}
          width={60}
          height={60}
          className="object-contain"
        />
        <h3 className="text-md font-bold font-sans text-right">{title}</h3>
      </div>
    </div>
  );
}
