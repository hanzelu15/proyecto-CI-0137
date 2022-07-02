const User = require("../models/user");

const getUserById = async (req, res) => {
  let user = await User.findById(req.params.id);
  return res.json({
    ok: true,
    user,
  });
};
//Update user
const updateUserData = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body.data
  );

  res.json({
    ok: true,
    updatedUser,
  });
};

const usersByRole = async (req, res) => {
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
module.exports = { getUserById, updateUserData,usersByRole};
