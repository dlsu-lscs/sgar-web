import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUnitById(id: number) {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/sgar-units/${id}?depth=2&draft=false&locale=undefined&trash=false`,
    );
    return data;
  } catch (error) {
    console.error("Error in getUnitById query: ", error);
    throw error;
  }
}
