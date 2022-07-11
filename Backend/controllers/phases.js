const Phase = require("../models/Phase");
const Project = require("../models/Project");

// #swagger.tags = ['Phases']

const getPhases = async (req, res) => {
  // #swagger.tags = ['Phases']
  const { page, limit } = req.query;
  const [phase, count] = await Promise.all([
    Phase.find()
      .skip(page * limit || 0)
      .limit(limit || 5),
    Phase.count(),
  ]);
  res.json({
    ok: true,
    count,
    phase,
  });
};
const getPhasesByProject = async (req, res) => {
  // #swagger.tags = ['Phases']
  const project = await Project.findById(req.params.idProject);
  if (project) {
    const { page, limit } = req.query;
    const [phases, count] = await Promise.all([
      Phase.find({ project: req.params.idProject })
        .skip(page * limit || 0)
        .limit(limit || 5),
      Phase.count({ project: req.params.idProject }),
    ]);
    res.json({
      ok: true,
      count,
      phases,
    });
  } else {
    res.status(500).json({
      ok: false,
      msg: "Project not found ",
    });
  }
};
const createPhase = async (req, res) => {
// #swagger.tags = ['Phases']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a phase',
          schema: { $ref: '#/definitions/CreatePhase' }
  } */

  console.log(req.body);
  const uid = req.body.uid;

  const phase = new Phase({
    usuario: uid,
    ...req.body,
  });

  try {
    const newPhase = await phase.save();
    res.json({
      ok: true,
      newPhase,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const updatePhase = async (req, res) => {
  // #swagger.tags = ['Phases']
  const phase = await Project.findById(req.params.id);

  if (!phase) {
    res.status(400);
    throw new Error("Phase not found");
  }

  const updatedPhase = await Phase.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    ok: true,
    updatedPhase,
  });
};

const deletePhase = async (req, res) => {
  // #swagger.tags = ['Phases']
  const phase = await Phase.findById(req.params.id);

  if (!phase) {
    res.status(400);
    throw new Error("Phase not found");
  }
  await Phase.findByIdAndDelete(req.params.id);
  res.json({
    ok: true,
  });
};

module.exports = {
  getPhases,
  getPhasesByProject,
  createPhase,
  updatePhase,
  deletePhase,
};
