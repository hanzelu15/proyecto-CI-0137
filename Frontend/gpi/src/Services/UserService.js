import gpiAPI from "../api/gpiAPI";

export async function getUserById(id) {
  try {
    const response = await gpiAPI.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserData(data, id) {
  try {
    const response = await gpiAPI.patch(`/user/update/${id}`, { data });
    return true;
  } catch (error) {
    console.error(error);
  }
}