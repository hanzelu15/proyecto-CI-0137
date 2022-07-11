import gpiAPI from "../api/gpiAPI";

export async function getExtrasByUnit(idUnit, page = 0, limit = 8) {
    try {
      const response = await gpiAPI.get(`/Extras/${idUnit}`, { params: { page, limit } });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function createExtra(data) {
    try {
      const response = await gpiAPI.post(`/Extras/new`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  export async function deleteExtra(id) {
    try {
      const response = await gpiAPI.delete(`/Extras/${id}` );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }