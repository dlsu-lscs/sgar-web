import { UnitType } from "@/types/units.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.API_KEY!;

const defaultHeaders = {
  Authorization: `users API-Key ${API_KEY}`,
};

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    method: "GET",
    headers: defaultHeaders,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getUnitById(id: number) {
  try {
    return await fetchJSON(
      `${API_URL}/api/sgar-units/${id}?depth=2&draft=false&trash=false`,
    );
  } catch (error) {
    console.error("Error in getUnitById query:", error);
    throw error;
  }
}

export async function getImageAsDataUrl(src: string) {
  try {
    const res = await fetch(`${API_URL}${src}`, {
      method: "GET",
      headers: defaultHeaders,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Image fetch failed: ${res.status}`);
    }

    const contentType =
      res.headers.get("content-type") ?? "application/octet-stream";
    const buffer = Buffer.from(await res.arrayBuffer());

    return `data:${contentType};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.error("Error in getImageAsDataUrl query:", error);
    return null;
  }
}

export async function getUnitBySlug(slug: string) {
  try {
    const data = await fetchJSON<{ docs: UnitType[] }>(
      `${API_URL}/api/sgar-units?where[slug][equals]=${slug}`,
    );

    if (data?.docs?.length > 0) {
      return data.docs[0];
    }

    throw new Error(`No unit found for slug: ${slug}`);
  } catch (error) {
    console.error("Error in getUnitBySlug query:", error);
    throw error;
  }
}

export async function getAllUnits() {
  try {
    const data = await fetchJSON<{ docs: UnitType[] }>(
      `${API_URL}/api/sgar-units?limit=0`,
    );

    if (data?.docs?.length > 0) {
      return data.docs;
    }

    throw new Error(`No unit found.`);
  } catch (error) {
    console.error("Error in getAllUnits query:", error);
    throw error;
  }
}

export type UnitWithImages = UnitType & {
  mainPubUrl?: string;
  logoUrl?: string;
};

export async function getUnitsWithImages(): Promise<UnitWithImages[]> {
  const docs: UnitType[] = await getAllUnits();

  return Promise.all(
    docs.map(async (unit) => {
      const [mainPub, logo] = await Promise.all([
        getImageAsDataUrl(unit["main-pub"]?.url ?? "/none"),
        getImageAsDataUrl(unit.logo?.url ?? "/none"),
      ]);

      return {
        ...unit,
        mainPubUrl: mainPub!,
        logoUrl: logo!,
      };
    }),
  );
}
