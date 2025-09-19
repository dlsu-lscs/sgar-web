import Navbar from "./components/navbar";
import SgarLogo2 from "./components/sgar-logo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col min-h-screen sm:px-30 sm:py-20 sm:items-start items-center">
          <SgarLogo2 />
          <div
            className="h-[200px] absolute inset-0 sm:top-120 top-90
          bg-gradient-to-t from-black via-black/40 to-transparent"
          ></div>
        </div>
      </main>
    </>
  );
}
