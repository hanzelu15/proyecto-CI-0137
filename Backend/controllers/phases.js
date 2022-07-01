const Phase = require("../models/Phase");
const Project = require("../models/Project");

const getPhases = async (req, res) => {
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
const createPhase = async (req, res) => {
  const uid = req.uid;
  console.log(req.name);
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
const getPhasesByProject = async (req, res) => {
  const project = await Project.findById(req.params.idProject);
  if (project) {
    const phase = await Phase.find({ project: req.params.idProject });
    if (!phase) {
      res.status(400);
      throw new Error("Phases not found");
    }

    res.json({
      ok: true,
      phase,
    });
  }
  else{
    res.status(500).json({
      ok: false,
      msg: "Project not found ",
    });
  }
};

const updatePhase = async (req, res) => {
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
