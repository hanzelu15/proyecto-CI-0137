const User = require("../models/user");

const bcryptjs = require("bcryptjs");

 // #swagger.tags = ['Users']

const getUserById = async (req, res) => {
   // #swagger.tags = ['Users']
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.json({
      ok: false,
    });
  }
  return res.json({
    ok: true,
    user,
  });
};
//Update user
const updateUserData = async (req, res) => {
   // #swagger.tags = ['Users']
  if (req.body.data.password !== undefined) {
    let pass = req.body.data.password;
    req.body.data.password = bcryptjs.hashSync(pass, 8);
  } else {
    console.log("Password undefined");
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body.data
  );
  //console.log(req.params);
  return res.json({
    ok: true,
    updatedUser,
  });
};

const usersByRole = async (req, res) => {
   // #swagger.tags = ['Users']
  if (req.params.role === "ALL" || req.params.role == undefined) {
    users = await User.find();
  } else {
    users = await User.find({ role: req.params.role });
  }
  return res.json({
    ok: true,
    users,
  });
};

const getAllUsers = async (req, res) => {
   // #swagger.tags = ['Users']
  const { id, page, limit } = req.query;
  const [users, count] = await Promise.all([
    User.find({ _id: {$ne: id}})
      .skip(page * limit || 0)
      .limit(limit || 5),
      User.count(),
  ]);
  res.json({
    ok: true,
    count,
    users,
  });
};

module.exports = { getUserById, updateUserData, usersByRole, getAllUsers};
