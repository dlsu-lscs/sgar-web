import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <SheetHeader>
          <Image
            src="/assets/sgar_logo2.webp"
            alt={"SGAR Logo 2"}
            width={120}
            height={120}
          />

          <SheetTitle className="text-left text-2xl font-extrabold mx-4">
            Menu
          </SheetTitle>
        </SheetHeader>
        <li className="flex-col space-y-8 mx-8 list-none">
          <ul>
            <Link href="/" className="text-foreground">
              Home
            </Link>
          </ul>
          <ul>
            <Link href="/map" className="text-foreground">
              Map
            </Link>
          </ul>
          <ul>
            <Link href="/faqs" className="text-foreground">
              FAQs
            </Link>{" "}
          </ul>
          <ul>
            <Link href="/about/sgar" className="text-foreground">
              SGAR
            </Link>
          </ul>
          <ul>
            <Link href="/about/lscs" className="text-foreground">
              LSCS
            </Link>{" "}
          </ul>
        </li>
      </SheetContent>
    </Sheet>
  );
}
