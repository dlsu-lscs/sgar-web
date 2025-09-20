import Navbar from "./components/navbar";
import SgarLogo2 from "./components/sgarlogo";
import Dept from "./containers/department";
import DeptTop from "./containers/department-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col min-h-screen sm:px-30 sm:py-20 sm:items-start items-center z-4">
          <SgarLogo2 />
        </div>
        <div className="absolute inset-0 sm:top-165 top-115 w-full">
          <div className="relative flex flex-col">
            <DeptTop name={"MAIN COLLEGE UNITS"} delay={3000} />
            <Dept name={"COMMISION AND OTHER UNITS"} delay={5000} />
            <Dept name={"COMMISION AND OTHER UNITS"} delay={7000} />
          </div>
        </div>
      </main>
    </>
  );
}
