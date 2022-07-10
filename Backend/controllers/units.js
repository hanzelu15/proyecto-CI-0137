const Unit = require("../models/Unit");
const Phase = require("../models/Phase");

  // #swagger.tags = ['Units']

const getUnit = async (req, res) => {
  // #swagger.tags = ['Units']
  const { page, limit } = req.query;
  const [unit, count] = await Promise.all([
    Unit.find()
      .skip(page * limit || 0)
      .limit(limit || 5),
      Unit.count(),
  ]);
  res.json({
    ok: true,
    count,
    unit,
  });
};
const createUnit = async(req, res) => {
  // #swagger.tags = ['Units']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'add unit',
          schema: { $ref: '#/definitions/CreateUnit' }
  } */
  console.log(req.body);
  const data = req.body;
  const unit = new Unit({
    ...data,
  });

  try {
    const newUnit = await unit.save();
    res.json({
      ok: true,
      newUnit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getUnitsByPhase = async (req, res) => {
  // #swagger.tags = ['Units']
  const phase = await Phase.findById(req.params.idPhase);
  if (phase) {
    const { page, limit } = req.query;
    const [units, count] = await Promise.all([
       Unit.find({ phase: req.params.idPhase })
        .skip(page * limit || 0)
        .limit(limit || 5),
        Unit.count(),
    ]);
    res.json({
      ok: true,
      count,
      units,
    });
  } else {
    res.status(500).json({
      ok: false,
      msg: "phase not found ",
    });
  }
};


const updateUnit = async(req, res) => {
  // #swagger.tags = ['Units']
  const unit = await Unit.findById(req.params.id);

  if (!unit) {
    res.status(400);
    throw new Error("Unit not found");
  }

  const updatedUnit = await Unit.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json({
    ok: true,
    updatedUnit,
  });
};

const deleteUnit = async(req, res) => {
  // #swagger.tags = ['Units']
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
  getUnit,
  createUnit,
  updateUnit,
  deleteUnit,
  getUnitsByPhase
};
