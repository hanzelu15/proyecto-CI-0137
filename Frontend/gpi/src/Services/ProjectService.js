import gpiAPI from "../api/gpiAPI";

export async function getAllProjects(page = 0, limit = 5) {
  try {
    const response = await gpiAPI.get("/projects", { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProject(data) {
  try {
    const response = await gpiAPI.patch(`/projects/update/${data._id}`, { data });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}