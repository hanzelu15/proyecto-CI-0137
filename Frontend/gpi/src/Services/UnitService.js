import gpiAPI from "../api/gpiAPI";

export async function getUnitsByPhase(idPhase, page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get(`/units/${idPhase}`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}