
const { Router } = require("express");
const { getUserById, updateUserData } = require("../controllers/users");
const { validateJwt } = require("../middleware/validateJwt");



const router = Router();
router.get("/:id",validateJwt, getUserById);
router.patch("/update/:id",validateJwt, updateUserData);
module.exports = router;