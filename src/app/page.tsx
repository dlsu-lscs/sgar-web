export const revalidate = 60;

import SgarLogo2 from "@/features/home/components/sgarlogo";
import Navbar from "@/features/home/components/navbar";
import Footer from "@/features/home/components/footer";
import DeptContainer from "@/features/home/containers/dept-container";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col min-h-screen sm:px-30 sm:py-20 sm:items-start items-center z-4">
          <SgarLogo2 />
        </div>
        <div className="absolute inset-0 sm:top-165 top-115 w-full">
          <DeptContainer />
          <Footer />
        </div>
      </main>
    </>
  );
}
