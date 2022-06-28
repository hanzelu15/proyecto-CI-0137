import gpiAPI from "../api/gpiAPI";

export async function getPhasesByProject(idProject, page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get(`/phases/${idProject}`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}