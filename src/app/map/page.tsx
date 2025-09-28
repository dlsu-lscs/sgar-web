import MapTitle from "@/features/map/components/map-title";
import Navbar from "@/features/home/components/navbar";
import Map from "@/features/map/components/map";
import Footer from "@/features/home/components/footer";

export default function MapPage() {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col">
        <div className="h-20 w-full" />
        <MapTitle />
        <Map />
        <Footer />
      </div>
    </>
  );
}
