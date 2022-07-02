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
    console.log("response.data");
    console.log(response.data.ok);
    return response.data.ok;
  } catch (error) {
    console.error(error);
  }
}

export async function updatePassword(data, id) {
  try {
    console.log(data);
    const response = await gpiAPI.patch(`/user/update/${id}`, { data });
    console.log(response);
    console.log("response.data");
    console.log(response.data.ok);
    return response.data.ok;
  } catch (error) {
    console.error(error);
  }
}
