
const { Router } = require("express");
const { getUserById } = require("../controllers/users");
const { validateJwt } = require("../middleware/validateJwt");



const router = Router();
router.get("/:id",validateJwt, getUserById);

module.exports = router;