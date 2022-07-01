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
  //const data = req.query;
  console.log("En controller.");
  console.log(req.body);
  console.log(req.params);
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body.data);
  //console.log(req.params);
  res.json({
    ok: true,
    updatedUser,
  });
};

module.exports = { getUserById, updateUserData };
