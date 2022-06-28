import gpiAPI from "../api/gpiAPI";

export async function getUserById() {
  try {
    const response = await gpiAPI.get("/auth/user");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
