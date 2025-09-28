import { queryOptions } from "@tanstack/react-query";
import { getUnitById } from "@/services/units.services";

export const unitByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ["unit", id],
    queryFn: () => getUnitById(id),
  });
