"use client";

import UnitCard from "../components/unitcard";
import Autoplay from "embla-carousel-autoplay";
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
  delay: number;
}

export default function DeptTop({ name, delay }: Props) {
  return (
    <div className=" relative w-auto z-10 h-[90%]">
      <div className="bg-gradient-to-t from-black/60 to-transparent sm:h-86 h-78 w-full absolute inset-0 -top-15 z-0" />
      <h2 className="text-xl flex justify-center items-center sm:justify-start font-bold text-white mb-6 px-8 sm:px-16 z-20">
        {name}
      </h2>
      <div className="relative">
        {/* added opacity-0 for testing */}
        <div className="absolute inset-0 top-1/3 w-full h-40 bg-[var(--card-secondary-foreground)] z-0 opacity-0" />
        <Carousel
          opts={{
            loop: true,
            align: "center",
            breakpoints: {
              "(min-width: 640px)": { align: "start" },
            },
          }}
          plugins={[
            Autoplay({
              delay: delay,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
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
          <div className="flex items-center justify-between px-5 pt-5 mt-5">
            <CarouselPrevious className="sm:static sm:flex hidden" />
            <CarouselNext className="sm:static sm:flex hidden" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
