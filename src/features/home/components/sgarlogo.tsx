import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function SgarLogo2() {
  return (
    <div className="flex flex-col sm:w-[40%] w-full max-w-sm sm:items-start items-center">
      <Image
        src="/assets/sgar_logo2.webp"
        alt="SGAR Logo 2"
        width={250}
        height={250}
        className="object-contain"
      />
      <p className="hidden sm:flex text-left text-sm font-light pb-4 w-full">
        Step into the colorful world of the USG Annual Recruitment Week!
        Discover student government units packed with adventures, creativity,
        and opportunities waiting for YOU!
      </p>
      <Link
        href="/about/sgar"
        className="flex flex-row items-center justify-center gap-3"
      >
        <Button className="text-background font-bold bg-foreground hover:bg-[var(--secondary-foreground)] cursor-pointer">
          <Play />
          See more
        </Button>
      </Link>
    </div>
  );
}
