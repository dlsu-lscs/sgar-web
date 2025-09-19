import Image from "next/image";

interface Props {
  pub_url: string;
  title: string;
  logo_url: string;
}

export default function UnitCard() {
  return (
    <div className="bg-[var(--card-foreground)] rounded-xs w-10 h-7">test</div>
  );
}
