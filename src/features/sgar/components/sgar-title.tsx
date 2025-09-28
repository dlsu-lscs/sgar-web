import Image from "next/image";

export default function SGARTitle() {
  return (
    <div className="h-full bg-gradient-to-t from-[var(--card-tertiary-foreground)] to-transparent w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/sgar_logo2.webp"
          alt="Organization Logo"
          width={250}
          height={250}
          className=""
        />
        <div className="sm:text-5xl text-4xl text-center uppercase mx-3 font-bold mb-10">
          STUDENT GOVERNMENT ANNUAL RECRUITMENT
        </div>
      </div>
    </div>
  );
}
