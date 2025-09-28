import Footer from "@/features/home/components/footer";
import Navbar from "@/features/home/components/navbar";
import SGARTitle from "@/features/sgar/components/sgar-title";
import AboutSGAR from "@/features/sgar/components/sgar";

export default function LSCS() {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col">
        <div className="h-20 w-full" />
        <SGARTitle />
        <AboutSGAR />
        <Footer />
      </div>
    </>
  );
}
