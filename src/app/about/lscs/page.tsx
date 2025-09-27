import LSCSTitle from "@/features/lscs/components/lscs_title";
import AboutLSCS from "@/features/lscs/components/lscs";
import Footer from "@/features/home/components/footer";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <div className="h-20 w-full" />
      <LSCSTitle />
      <AboutLSCS />
      <Footer />
    </div>
  );
}
