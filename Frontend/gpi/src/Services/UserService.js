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
    return response.data.ok;
  } catch (error) {
    console.error(error);
  }
}

export async function updatePassword(data, id) {
  try {
    const response = await gpiAPI.patch(`/user/update/${id}`, { data });
    return response.data.ok;
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

export async function getAllUsers(id, page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get("/user", { params: {id, page, limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}