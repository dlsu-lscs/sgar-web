import Navbar from "./components/navbar";
import SgarLogo2 from "./components/sgar-logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-30 sm:py-20 sm:items-start items-center">
        <SgarLogo2 />
      </main>
    </>
  );
}
