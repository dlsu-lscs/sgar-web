import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header>
      <nav className="relative bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/assets/sgar_logo.webp"
            alt="SGAR logo"
            width={168}
            height={55}
            className="object-contain"
          />
          <li className="hidden sm:flex space-x-2 items-center">
            <ul>
              <Button variant="link" className="text-foreground">
                HOME
              </Button>
            </ul>
            <ul>
              <Button variant="link" className="text-foreground">
                MAP
              </Button>
            </ul>
          </li>

          <div className="sm:hidden"></div>
        </div>
      </nav>
    </header>
  );
}
