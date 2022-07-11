const Project = require("../models/Project");

// #swagger.tags = ['Projects']

const getAllProjects = async (req, res) => {
  // #swagger.tags = ['Projects']
  
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
  // #swagger.tags = ['Projects']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a project',
          schema: { $ref: '#/definitions/CreateProject' }
  } */
  try {
    const project = new Project(req.body);
    const exists = await Project.exists({ name: req.body.name });
    if (exists) {
      return res.json({
        ok: false,
        msg: "Project Already exist",
      });
    }

    await project.save();
    return res.json({
      ok: true,
      project,
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
  // #swagger.tags = ['Projects']
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }
  console.log("sadad",req.body);
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body );
  res.json({
    ok: true,
    updatedProject,
  });
};

const deleteProject = async (req, res) => {
  // #swagger.tags = ['Projects']
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
