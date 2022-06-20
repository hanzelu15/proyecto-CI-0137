const { request } = require("express");
const User = require("../models/user");

const validatePermissions = async (req = request, res, next) => {

  try {
    const uid = req.uid;
    const user = await User.findById(uid);

    if(!user.role == 'ADMIN') {
        return res.status(401).json({
            error: true,
            message: "The user does not have permissions to access this path",
        });
    }
  } catch (err) {
    res.status(500).json({
        ok: false,
        msg: "Please contact the administrator",
      });
  }
  next();
};

module.exports = { validatePermissions };