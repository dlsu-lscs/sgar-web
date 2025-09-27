import { queryOptions } from "@tanstack/react-query";

export const unitBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["unit", slug],
    queryFn: () => getUnitBySlug(slug),
  });
