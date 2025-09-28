"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";

export default function Map() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full relative flex flex-col items-center justify-center py-10 px-5 sm:px-0">
      <Dialog modal>
        <DialogTrigger asChild>
          <div className="relative cursor-pointer inline-block">
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-40 rounded-md" />

            <Image
              src="/assets/SGAR_Map.webp"
              alt="Booth Map"
              width={800}
              height={600}
              className="rounded-md object-contain"
            />
          </div>
        </DialogTrigger>

        <VisuallyHidden.Root asChild>
          <DialogTitle />
        </VisuallyHidden.Root>

        <DialogContent className="!p-0 !m-0 bg-transparent border-none outline-none hide-close-button sm:min-w-5xl max-h-[90vh] flex items-center justify-center">
          <Image
            src="/assets/SGAR_Map.webp"
            alt="Booth Map Enlarged"
            width={1200}
            height={800}
            className="rounded-md object-contain w-full h-auto sm:max-w-5xl"
            sizes="(max-width: 640px) 100vw, 80vw"
          />
        </DialogContent>
      </Dialog>

      <div className="w-full sm:max-w-5xl max-w-lg sm:px-0 px-5 text-center mt-10">
        <p className="text-base leading-relaxed">
          This is the booth map for SGAR, found in CADS.
        </p>
      </div>
    </div>
  );
}
