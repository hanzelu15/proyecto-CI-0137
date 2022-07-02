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
    console.log(data);
    const response = await gpiAPI.patch(`/user/update/${id}`, { data });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getUsersByRole(role) {
  try {
    const response = await gpiAPI.get(`/user/userlist/${role}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
