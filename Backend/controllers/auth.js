const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/jws");

const User = require("../models/user");
const RecoveryCode = require("../models/RecoveryCode");
const nodemailer = require("nodemailer");

  // #swagger.tags = ['Users']

// register
const createUser = async (req, res) => {
    // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/CreateUser' }
  } */
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
    if (!req.body.role) userJSON = { ...userJSON, role: "INSPECTOR" };
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
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Log user',
          schema: { $ref: '#/definitions/LoginUser' }
  } */
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
  // #swagger.tags = ['Users']
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
  // #swagger.tags = ['Users']
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


const getTransporter = function () {
  let transporter;
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  return transporter;
};

const sendRecoveryCodeEmail = async (userEmail, randomToken) => {
  let transporter = getTransporter();
  
  await transporter.sendMail({
    from: "ci0137@psgfanclubcr.com",
    to: userEmail,
    subject: "Su código de recuperación para GPI",
    text: `Utilice este código para recuperar su contraseña: ${randomToken}`,
    html: `Utilice este código para recuperar su contraseña: <strong>${randomToken}</strong>`,
  });
};

const passwordRecovery = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const userPayload = req.body;
    const user = await User.findOne({ email: userPayload.data.email, function (err, docs)  {
      if (err){
          console.log(err)
          res.status(401).send("Datos no válidos");
          return;
      }
    }
    });
    const randomToken = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000
    );
    const code = randomToken.toString();
    await RecoveryCode.deleteOne({userID: user._id});
    const recoCode = new RecoveryCode({
      userID: user._id,
      code: code,
    });
    console.log("En pr 2 : ", recoCode);
    try {
      const nowDate = new Date();
      const expirationDate = new Date(
        nowDate.setMinutes(nowDate.getMinutes() + 5)
      );
      const newRecoCode = await RecoveryCode.create({userID: user._id, code: code, expiration: expirationDate});
      await sendRecoveryCodeEmail(userPayload.data.email, code);
      return res.json({
        ok: true,
        newRecoCode,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Please contact the administrator",
      });
    }

    //await sendRecoveryCodeEmail(userPayload.data.email, code);

    //res.status(200).send();
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

const passwordChange = async (req, res) => {
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
    if (!req.body.role) userJSON = { ...userJSON, role: "INSPECTOR" };
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

const codeCheck = async (req, res) => {
  const code = req.body.data.code;
  try {
    const  cd = await RecoveryCode.findOne({  code: code  });
    const nowDate = new Date();
    let expired;
    if(cd.expiration.getTime() > nowDate.getTime()){
      expired = false;
    } else {
      expired = true;
    }
    if (!cd || expired) {
      return res.status(400).json({
        ok: false,
        msg: "Username does not exist ",
      });
    }
    return res.status(201).json({
      ok: true,
      cd,
    });
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const passwordUpate = async (req, res) => {
  if (req.body.data.password !== undefined) {
    let pass = req.body.data.password;
    req.body.data.password = bcryptjs.hashSync(pass, 8);
  } else {
    console.log("Password undefined");
    return res.json({
      ok: false,
    });
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.body.userID, { password: req.body.data.password }
  );
  if(!updatedUser){
    return res.json({
      ok: false,
    });
  }
  return res.json({
    ok: true,
  });
};

module.exports = { createUser, loginUser, renewToken, getUsers, passwordRecovery, passwordChange, codeCheck, passwordUpate };
