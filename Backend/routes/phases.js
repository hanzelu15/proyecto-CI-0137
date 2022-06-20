const { Router } = require("express");

const {
 getPhases,
  createPhase,
  readPhase,
  updatePhase,
  deletePhase,
} = require("../controllers/phases");

const router = Router();

router.get("/", getPhases);
router.get("/:id", readPhase);
router.post("/", createPhase);
router.put("/update/:id", updatePhase);
router.delete("/", deletePhase);
module.exports = router;
