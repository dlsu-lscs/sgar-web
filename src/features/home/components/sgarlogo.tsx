import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function SgarLogo2() {
  return (
    <div className="flex flex-col sm:w-[30%] w-full max-w-sm sm:items-start items-center">
      <Image
        src="/assets/sgar_logo2.webp"
        alt="SGAR Logo 2"
        width={250}
        height={250}
        className="object-contain"
      />
      <p className="hidden sm:flex text-left text-xs font-light pb-4">
        Step into the colorful world of the USG Annual Recruitment Week!
        Discover student government units packed with adventures, creativity,
        and opportunities waiting for YOU!
      </p>
      <Button className="text-background font-bold bg-foreground hover:bg-[var(--secondary-foreground)]">
        <Play />
        See more
      </Button>
    </div>
  );
}
