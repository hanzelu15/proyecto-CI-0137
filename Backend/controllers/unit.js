const Phase = require("../models/Phase");

const getPhases = (req, res) => {
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
const createPhase = (req, res) => {
  const uid = req.uid;
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

const updatePhase = (req, res) => {
  const phase = await Project.findById(req.params.id);

  if (!phase) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedPhase = await Phase.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json({
    ok: true,
    updatedPhase,
  });
};

const deletePhase = (req, res) => {
  const phase = await Phase.findById(req.params.id);

  if (!phase) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await Phase.findByIdAndDelete(req.params.id);
  res.json({
    ok: true,
  });
};

module.exports = {
  getPhases,
  createPhase,
  updatePhase,
  deletePhase,
};
