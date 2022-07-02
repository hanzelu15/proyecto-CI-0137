const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const getUserById = async (req, res) => {
  let user = await User.findById(req.params.id);
  return res.json({
    ok: true,
    user,
  });
};
//Update user 
const updateUserData = async (req, res) => {
  if(req.body.data.password !== undefined){
    let pass = req.body.data.password;
    req.body.data.password = bcryptjs.hashSync(pass, 8);
  } else {
    console.log("Password undefined");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body.data);
  //console.log(req.params);
  res.json({
    ok: true,
    updatedUser,
  });
};
module.exports = { getUserById, updateUserData };
