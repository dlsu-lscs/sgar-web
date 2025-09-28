import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="relative flex flex-row bg-black sm:py-2 py-1 sm:px-8 px-5">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/sgar_logo.webp"
              alt="SGAR logo"
              width={168}
              height={55}
              className="object-contain"
            />
          </Link>
          <ul className="hidden sm:flex space-x-2 items-center">
            <li>
              <Link href="/" passHref>
                <Button
                  variant="link"
                  className="text-foreground cursor-pointer"
                >
                  HOME
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/map" passHref>
                <Button
                  variant="link"
                  className="text-foreground cursor-pointer"
                >
                  MAP
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/faqs" passHref>
                <Button
                  variant="link"
                  className="text-foreground cursor-pointer"
                >
                  FAQs
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about/sgar" passHref>
                <Button
                  variant="link"
                  className="text-foreground cursor-pointer"
                >
                  SGAR
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about/lscs" passHref>
                <Button
                  variant="link"
                  className="text-foreground cursor-pointer"
                >
                  LSCS
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex sm:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}
