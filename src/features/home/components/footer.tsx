import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-[80%] relative bg-black flex flex-col items-center justify-center gap-2">
      <Image
        src="/assets/sgar_logo2.webp"
        alt={"SGAR Logo 2"}
        width={100}
        height={100}
        className="object-contain"
      />
      <p className="text lg text-[var(--card-foreground)]">
        Powered by La Salle Computer Society
      </p>
    </div>
  );
}
