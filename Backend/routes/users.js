const { Router } = require("express");
const {
  getUserById,
  updateUserData,
  usersByRole,
} = require("../controllers/users");
const { validateJwt } = require("../middleware/validateJwt");

const router = Router();
router.get("/userlist/:role", usersByRole);
router.get("/:id", validateJwt, getUserById);
router.patch("/update/:id", validateJwt, updateUserData);
module.exports = router;
