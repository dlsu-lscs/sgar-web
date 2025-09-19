import Image from "next/image";
import Navbar from "./components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-30 sm:py-20 gap-8">
        <div className="flex flex-col sm:w-[30%] w-full max-w-sm">
          <Image
            src="/assets/sgar_logo2.webp"
            alt="SGAR Logo 2"
            width={250}
            height={250}
            className="object-contain"
          />
          <p className="hidden sm:flex text-left text-xs font-light">
            {" "}
            DESCRIPTION: Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit...{" "}
          </p>
        </div>
      </main>
    </>
  );
}
