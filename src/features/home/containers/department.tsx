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
    <div className=" relative w-full z-10">
      <h2 className="text-xl flex justify-center items-center sm:justify-start font-bold text-white mb-6 px-8 sm:px-16">
        {name}
      </h2>
      <Carousel opts={{ align: "start", loop: true }} className="">
        <CarouselContent className="absolute inset-0 -ml-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <CarouselItem key={i} className="sm:basis-3/19 flex-shrink-0">
              <UnitCard
                pub_url={lscs.pub_url}
                logo_url={lscs.logo_url}
                title={lscs.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between p-5 gap-2 mt-45">
          <CarouselPrevious className="sm:static" />
          <CarouselNext className="sm:static" />
        </div>
      </Carousel>
    </div>
  );
}
