import Footer from "@/features/home/components/footer";
import SGARTitle from "@/features/sgar/components/sgar-title";
import AboutSGAR from "@/features/sgar/components/sgar";

export default function LSCS() {
  return (
    <div className="relative flex flex-col">
      <div className="h-20 w-full" />
      <SGARTitle />
      <AboutSGAR />
      <Footer />
    </div>
  );
}
