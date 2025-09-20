import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className=" relative bg-black sm:py-2 py-1 sm:px-8 px-5">
        <div className="flex justify-between items-center w-full">
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
            <ul>
              <Button variant="link" className="text-foreground">
                FAQs
              </Button>
            </ul>
            <ul>
              <Button variant="link" className="text-foreground">
                SGAR
              </Button>
            </ul>
            <ul>
              <Button variant="link" className="text-foreground">
                LSCS
              </Button>
            </ul>
          </li>

          <div className="flex sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left" className="border-none">
                <SheetHeader>
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
                    <Link href="/" className="text-foreground">
                      Map
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/" className="text-foreground">
                      FAQs
                    </Link>{" "}
                  </ul>
                  <ul>
                    <Link href="/" className="text-foreground">
                      SGAR
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/" className="text-foreground">
                      LSCS
                    </Link>{" "}
                  </ul>
                </li>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
