
const { Router } = require("express");
const { check } = require("express-validator");
const { getUserById, updateUserData } = require("../controllers/users");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");
const { validateFields } = require("../middleware/validateFields");



const router = Router();
router.get("/:id",validateJwt, getUserById);
router.patch("/update/:id",validateJwt, updateUserData);

module.exports = router;