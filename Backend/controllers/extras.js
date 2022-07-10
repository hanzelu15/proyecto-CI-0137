const Extra = require("../models/Extra");
const Unit = require("../models/Unit");

  // #swagger.tags = ['Extras']

const getExtra = async (req, res) => {
  // #swagger.tags = ['Extras']
  const { page, limit } = req.query;
  const [extra, count] = await Promise.all([
    Extra.find()
      .skip(page * limit || 0)
      .limit(limit || 5),
      Extra.count(),
  ]);
  res.json({
    ok: true,
    count,
    extra,
  });
};
const createExtra = async(req, res) => {
  // #swagger.tags = ['Extras']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'add unit',
          schema: { $ref: '#/definitions/CreateExtra' }
  } */
  const data = req.body;
  const extra = new Extra({
    ...data,
  });

  try {
    const newExtra = await extra.save();
    res.json({
      ok: true,
      newExtra,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getExtrasByUnit = async (req, res) => {
  // #swagger.tags = ['Extras']
  const unit = await Unit.findById(req.params.idUnit);
  if (unit) {
    const { page, limit } = req.query;
    const [extras, count] = await Promise.all([
       Extra.find({ phase: req.params.idUnit })
        .skip(page * limit || 0)
        .limit(limit || 5),
        Extra.count(),
    ]);
    res.json({
      ok: true,
      count,
      extras,
    });
  } else {
    res.status(500).json({
      ok: false,
      msg: "unit not found ",
    });
  }
};


const updateExtra = async(req, res) => {
  // #swagger.tags = ['Extras']
  const extra = await Extra.findById(req.params.id);

  if (!extra) {
    res.status(400);
    throw new Error("Extra not found");
  }

  const updatedExtra = await Extra.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json({
    ok: true,
    updatedExtra,
  });
};

const deleteExtra = async(req, res) => {
  // #swagger.tags = ['Extras']
  const extra = await Extra.findById(req.params.id);

  if (!extra) {
    res.status(400);
    throw new Error("Extra not found");
  }
  await Extra.findByIdAndDelete(req.params.id);
  res.json({
    ok: true,
  });
};

module.exports = {
  getExtra,
  createExtra,
  updateExtra,
  deleteExtra,
  getExtrasByUnit
};
