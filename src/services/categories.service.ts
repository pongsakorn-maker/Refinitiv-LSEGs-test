import axios from "axios";

export async function getCategories() {
  try {
    const response = await (
      await axios.get("https://api.publicapis.org/categories")
    ).data;
    return response;
  } catch (error) {
    console.error(error);
  }
}
