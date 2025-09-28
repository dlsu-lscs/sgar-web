import Image from "next/image";

export default function LSCSTitle() {
  return (
    <div className="h-full bg-gradient-to-t from-[var(--card-tertiary-foreground)] to-transparent w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/lscs_logo1.webp"
          alt="Organization Logo"
          width={200}
          height={200}
          className="mb-10"
        />
        <div className="sm:text-5xl text-4xl text-center uppercase mx-3 font-bold">
          LA SALLE COMPUTER SOCIETY
        </div>
      </div>
    </div>
  );
}
