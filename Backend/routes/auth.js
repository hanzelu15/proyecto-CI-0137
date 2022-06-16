const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken, getUsers } = require("../controllers/auth");
const { validateFields } = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");


const router = Router();

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe tener almenos 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

router.get(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El passport es obligatorio").not().isEmpty(),
    validateFields
  ],
  loginUser
);

router.get("/renew", validateJwt,renewToken);

router.get("/users", [validateJwt, validatePermissions],getUsers);

module.exports = router;
