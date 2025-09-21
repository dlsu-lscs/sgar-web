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

export default function Dept({ name, delay }: Props) {
  return (
    <div className=" relative w-full z-10 bg-[var(--card-tertiary-foreground)] pt-5">
      {/* commented above bg-[var(--card-secondary-foreground)] */}
      {/* black divider OPACITY SET TO 0*/}
      <div className="w-full bg-[var(--card-tertiary-foreground)] h-5 mb-7 opacity-0"></div>

      {/* title of department */}
      <h2 className="text-xl flex justify-center items-center sm:justify-start font-bold text-white mb-6 px-8 sm:px-16 z-20">
        {name}
      </h2>
      <div className="relative">
        <div className="absolute inset-0 top-1/3 w-full h-40 bg-[var(--card-secondary-foreground)] z-0 opacity-0" />

        {/* carousel for units */}
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
          className="z-20 *:overflow-visible "
        >
          <CarouselContent className="-ml-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="transition-transform hover:scale-105 duration-300 "
              >
                <UnitCard
                  pub_url={lscs.pub_url}
                  logo_url={lscs.logo_url}
                  title={lscs.title}
                  slug={lscs.slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>{" "}
          <div className="flex items-center justify-between px-5 pt-5 mt-5">
            <CarouselPrevious className="sm:static sm:flex hidden" />
            <CarouselNext className="sm:static sm:flex hidden" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
