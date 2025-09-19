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

export default function DeptTop({ name }: Props) {
  return (
    <div className=" relative w-auto z-10 h-[90%]">
      <h2 className="text-xl flex justify-center items-center sm:justify-start font-bold text-white mb-6 px-8 sm:px-16 z-20">
        {name}
      </h2>
      <Carousel
        opts={{
          loop: true,
          align: "center",
          breakpoints: {
            "(min-width: 640px)": { align: "start" },
          },
        }}
        className="z-20"
      >
        <CarouselContent className="-ml-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <CarouselItem key={i} className="">
              <div className="w-full">
                <UnitCard
                  pub_url={lscs.pub_url}
                  logo_url={lscs.logo_url}
                  title={lscs.title}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between p-5 mt-5">
          <CarouselPrevious className="sm:static" />
          <CarouselNext className="sm:static" />
        </div>
      </Carousel>
    </div>
  );
}
