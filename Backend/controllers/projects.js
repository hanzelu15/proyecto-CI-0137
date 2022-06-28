const Project = require("../models/Project");

const getAllProjects = async (req, res) => {
  const { page, limit } = req.query;
  const [projects, count] = await Promise.all([
    Project.find()
      .skip(page * limit || 0)
      .limit(limit || 5),
    Project.count(),
  ]);
  res.json({
    ok: true,
    count,
    projects,
  });
};
const createProject = async (req, res) => {
  const uid = req.uid;
  const project = new Project({
    usuario: uid,
    ...req.body,
  });

  try {
    const newProject = await project.save();
    res.json({
      ok: true,
      newProject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json({
    ok: true,
    updatedProject,
  });
};

const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  await Project.findByIdAndDelete(req.params.id);
  res.json({
    ok: true,
  });
};


module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
};
