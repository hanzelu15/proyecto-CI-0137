const { Router } = require("express");
const { check } = require("express-validator");
const {
  createUser,
  loginUser,
  renewToken,
  getUsers,
  passwordRecovery,
  passwordChange,
  codeCheck,
  passwordUpate,
} = require("../controllers/auth");
const {
  validateFields,
  validateSchema,
} = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");
const { createUserSchema } = require("../schemas/userSchema");

const router = Router();

router.post("/new", validateSchema(createUserSchema), createUser);

router.post("/login", loginUser);

router.get("/renew", validateJwt, renewToken);
router.get("/users", [validateJwt, validatePermissions], getUsers);

router.post("/password-recovery/", passwordRecovery);

router.post("/password-change/", passwordChange);

router.post("/code-check/", codeCheck);

router.post("/password-update/", passwordUpate);

module.exports = router;
