const User = require("../models/user");

const getUserById = async (req, res) => {
  const { id } = req;

  let user = await User.findById(id);
  return res.json({
    ok: true,
    user,
  });
};

module.exports = { getUserById };
