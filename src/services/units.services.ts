import { s3 } from "@/lib/s3";
import { UnitType } from "@/types/units.types";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import path from "path";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.API_KEY!;

const defaultHeaders: HeadersInit = {
  Authorization: `users API-Key ${API_KEY}`,
};

async function fetchJSON<T>(url: string, revalidate = 60): Promise<T> {
  const res = await fetch(url, {
    method: "GET",
    headers: defaultHeaders,
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

async function fetchBuffer(
  url: string,
  revalidate = 300,
): Promise<{ buffer: Buffer; contentType: string }> {
  const res = await fetch(url, {
    method: "GET",
    headers: defaultHeaders,
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  }

  const contentType =
    res.headers.get("content-type") ?? "application/octet-stream";
  const buffer = Buffer.from(await res.arrayBuffer());
  return { buffer, contentType };
}

export async function getUnitById(id: number, revalidate = 60) {
  try {
    return await fetchJSON(
      `${API_URL}/api/sgar-units/${id}?depth=2&draft=false&trash=false`,
      revalidate,
    );
  } catch (error) {
    console.error("Error in getUnitById query:", error);
    throw error;
  }
}

export async function getImageAsDataUrl(src: string) {
  try {
    if (!src) return null;

    const normalizedSrc = src.replace(/^\//, "");
    const filename = decodeURIComponent(path.basename(normalizedSrc));


    const command = new GetObjectCommand({
      Bucket: "sgar-2025",
      Key: filename,
    });

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 * 60 * 24 });

    return signedUrl;
  } catch (error) {
    console.error("Error in getImageAsDataUrl query:", error);
    return null;
  }
}

export async function getUnitBySlug(slug: string, revalidate = 60) {
  try {
    const data = await fetchJSON<{ docs: UnitType[] }>(
      `${API_URL}/api/sgar-units?where[slug][equals]=${slug}`,
      revalidate,
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

export async function getAllUnits(revalidate = 60) {
  try {
    const data = await fetchJSON<{ docs: UnitType[] }>(
      `${API_URL}/api/sgar-units?limit=0`,
      revalidate,
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

export async function getUnitsWithImages(
  unitRevalidate = 60,
): Promise<UnitWithImages[]> {
  const docs: UnitType[] = await getAllUnits(unitRevalidate);

  return Promise.all(
    docs.map(async (unit) => {
      const [mainPub, logo] = await Promise.all([
        getImageAsDataUrl(unit["main-pub"]?.url ?? "", ),
        getImageAsDataUrl(unit.logo?.url ?? "", ),
      ]);

      return {
        ...unit,
        mainPubUrl: mainPub ?? undefined,
        logoUrl: logo ?? undefined,
      };
    }),
  );
}
