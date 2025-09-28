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

export default function Dept({ name, delay, units }: Props) {
  return (
    <div className="relative w-full z-10 bg-[var(--card-tertiary-foreground)] pt-0">
      <h2 className="text-xl font-bold text-white mb-6 px-8 sm:px-16">
        {name}
      </h2>

      <Carousel
        opts={{
          loop: true,
          align: "center",
          breakpoints: { "(min-width: 640px)": { align: "start" } },
        }}
        plugins={[
          Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
        ]}
      >
        <CarouselContent className="-ml-0 py-7">
          {units.map((unit) => (
            <CarouselItem key={unit.id} className="overflow-visible">
              <UnitCard
                pub_url={unit.mainPubUrl ?? "/none"}
                logo_url={unit.logoUrl ?? "/none"}
                title={unit["unit-name"]}
                slug={unit.slug ?? ""}
                pub_alt={unit["main-pub"]?.alt ?? "alt"}
                logo_alt={unit["logo"]?.alt ?? "alt"}
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
  );
}
