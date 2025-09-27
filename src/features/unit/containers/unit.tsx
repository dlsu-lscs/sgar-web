"use client";
import UnitDesc from "@/features/unit/components/unit/unit-details";
import ExecBoard from "@/features/unit/components/unit/exec";
import Committee from "@/features/unit/components/unit/committee";
import Application from "@/features/unit/components/unit/application";
import { useQuery } from "@tanstack/react-query";
import { unitByIdQueryOptions } from "@/queries/units.queries";
import { AiOutlineLoading } from "react-icons/ai";
import { UnitType } from "@/types/units.types";

type UnitProps = {
  unit?: UnitType;
};

export default function Unit({ unit }: UnitProps) {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col relative items-top justify-center gap-15">
      <UnitDesc />
      <ExecBoard />
      <Committee />
      <Application />
    </div>
  );
}
