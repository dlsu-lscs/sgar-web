import SgarLogo2 from "@/features/home/components/sgarlogo";
import Dept from "@/features/home/containers/department";
import DeptTop from "@/features/home/containers/department-top";
import Footer from "@/features/home/components/footer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col min-h-screen sm:px-30 sm:py-20 sm:items-start items-center z-4">
        <SgarLogo2 />
      </div>
      <div className="absolute inset-0 sm:top-165 top-115 w-full">
        <div className="relative flex flex-col">
          <DeptTop name={"MAIN COLLEGE UNITS"} delay={3000} />
          <Dept name={"COMMISION AND OTHER UNITS"} delay={5000} />
          <Dept name={"COLLEGE OF COMPUTER STUDIES"} delay={7000} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
