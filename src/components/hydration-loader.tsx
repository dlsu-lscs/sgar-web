"use client";
import { useEffect, useState } from "react";
import Loading from "../app/loading";

export default function HydrationLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <Loading />;
  return <>{children}</>;
}
