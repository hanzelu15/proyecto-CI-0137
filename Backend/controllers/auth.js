const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/jws");

const User = require("../models/user");

// register
const createUser = async (req, res) => {
  let userJSON = req.body;
  let email = req.body.email;

  try {
    let userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        ok: false,
        msg: "Email already exist",
      });
    }
    if (!req.body.role) userJSON = { ...userJSON, role: "Inspector" };
    userJSON.password = bcryptjs.hashSync(req.body.password, 8);
    const user = new User(userJSON);
    await user.save();
    const token = await generateJWT(user.id, user.name);

    return res.status(201).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};
// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {

    const  user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "Username does not exist ",
      });
    }
    const validPassword = await bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password or Username is wrong ",
      });
    }
    const token = await generateJWT(user.id, user.name);
    return res.status(200).json({
      ok: true,
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

// renewToken
const renewToken = async (req, res) => {
  const { uid, name } = req;

  
  const token = await generateJWT(uid, name);
  let user = await User.findById( uid );
  return res.json({
    ok: true,
    user,
    token,
  });
};

const getUsers = async (req, res) => {
  const { page, limit } = req.query;

  const [users, count] = await Promise.all([
    User
      .find()
      .skip(page * limit || 0)
      .limit(limit || 5),
      User.count()
  ]);
  res.json({
    ok: true,
    count,
    users
  });
};

module.exports = { createUser, loginUser, renewToken, getUsers };
