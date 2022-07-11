import gpiAPI from "../api/gpiAPI";

export async function getExtrasByUnit(idUnit, page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get(`/extras/${idUnit}`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createExtra(data) {
  try {
    const response = await gpiAPI.post(`/extras/new`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function deleteExtra(id) {
  try {
    const response = await gpiAPI.delete(`/extras/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateExtra(data) {
  try {
    const response = await gpiAPI.patch(`/extras/update/${data._id}`, 
      data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
