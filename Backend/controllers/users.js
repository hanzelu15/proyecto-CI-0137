const User = require("../models/user");

const getUserById = async (req, res) => {

  let user = await User.findById(req.params.id);
  return res.json({
    ok: true,
    user,
  });
};

module.exports = { getUserById };
