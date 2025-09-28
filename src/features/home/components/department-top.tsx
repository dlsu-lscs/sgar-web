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
import { UnitWithImages } from "@/services/units.services";

interface Props {
  name: string;
  delay: number;
  units: UnitWithImages[];
}

export default function DeptTop({ name, delay, units }: Props) {
  return (
    <div className="relative w-auto z-10 h-[90%]">
      <div className="bg-gradient-to-t from-[var(--card-tertiary-foreground)] to-transparent sm:h-96 h-88 w-full absolute inset-0 -top-15 z-0" />
      <h2 className="relative text-xl flex justify-center items-center sm:justify-start font-bold text-white mb-6 px-8 sm:px-16 z-20">
        {name}
      </h2>
      <div className="relative">
        <div className="absolute inset-0 top-1/3 w-full h-40 bg-[var(--card-secondary-foreground)] z-0 opacity-0" />
        <Carousel
          opts={{
            loop: true,
            align: "center",
            breakpoints: { "(min-width: 640px)": { align: "start" } },
          }}
          plugins={[
            Autoplay({
              delay,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="z-20"
        >
          <CarouselContent className="-ml-0 py-10">
            {units.map((unit) => (
              <CarouselItem key={unit.id} className="overflow-visible">
                <UnitCard
                  pub_url={unit.mainPubUrl ?? "/none"}
                  logo_url={unit.logoUrl ?? "/none"}
                  title={unit["unit-name"]}
                  slug={unit.slug ?? ""}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between px-5">
            <CarouselPrevious className="sm:static sm:flex hidden" />
            <CarouselNext className="sm:static sm:flex hidden" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
