import gpiAPI from "../api/gpiAPI";

export async function getPhasesByProject(idProject, page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get(`/phases/${idProject}`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createPhase(data) {
  try {
    const response = await gpiAPI.post(`/phases/new`,  data );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}