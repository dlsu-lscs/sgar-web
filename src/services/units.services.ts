import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

export async function getUnitById(id: number) {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/sgar-units/${id}?depth=2&draft=false&trash=false`,
      {
        headers: {
          Authorization: `users API-Key ${API_KEY}`,
        },
      },
    );
    return data;
  } catch (error) {
    console.error("Error in getUnitById query:", error);
    throw error;
  }
}

export async function getImageAsDataUrl(src: string) {
  try {
    const response = await axios.get(`${API_URL}${src}`, {
      headers: {
        Authorization: `users API-Key ${API_KEY}`,
      },
      responseType: "arraybuffer",
    });

    const contentType = response.headers["content-type"];

    const base64 = Buffer.from(response.data, "binary").toString("base64");

    return `data:${contentType};base64,${base64}`;
  } catch (error) {
    console.error("Error in getImageAsDataUrl query:", error);
    return null;
  }
}

export async function getUnitBySlug(slug: string) {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/sgar-unit?where[slug][equals]=${slug}`,
      {
        headers: {
          Authorization: `users API-Key ${API_KEY}`,
        },
      },
    );

    if (data?.docs && data.docs.length > 0) {
      return data.docs[0];
    }

    throw new Error(`No unit found for slug: ${slug}`);
  } catch (error) {
    console.error("Error in getUnitBySlug query:", error);
    throw error;
  }
}
