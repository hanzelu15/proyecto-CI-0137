import gpiAPI from "../api/gpiAPI";

export async function getPhasesByProject(idProject, page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get(`/phases/${idProject}`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createPhase(idPhase, name, location, description) {
  try {
    const response = await gpiAPI.post(`/phases/`, { params: { name, location, description } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}