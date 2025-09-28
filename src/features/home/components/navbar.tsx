import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className=" relative flex flex-row bg-black sm:py-2 py-1 sm:px-8 px-5">
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
              <Button variant="link" className="text-foreground ">
                <Link href="/" className="">
                  HOME
                </Link>
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
                <Link href="/about/sgar">SGAR</Link>
              </Button>
            </ul>
            <ul>
              <Button variant="link" className="text-foreground">
                <Link href="/about/lscs" className="">
                  LSCS
                </Link>
              </Button>
            </ul>
          </li>
        </div>
        <div className="flex sm:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}
