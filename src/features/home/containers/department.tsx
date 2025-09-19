import UnitCard from "../components/unitcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import lscs from "../data/placeholder";

interface Props {
  name: string;
}

export default function Dept({ name }: Props) {
  return (
    <div className="col-start-1 row-start-1 absolute inset-0 sm:top-165 top-115 w-full z-10">
      <h2 className="text-xl font-bold text-white mb-4 px-8 sm:px-16">
        {name}
      </h2>
      <div className="flex flex-row px-5">
        <UnitCard
          pub_url={lscs.pub_url}
          logo_url={lscs.logo_url}
          title={lscs.title}
        />
      </div>
    </div>
  );
}
