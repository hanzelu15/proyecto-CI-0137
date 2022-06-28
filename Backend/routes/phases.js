const { Router } = require("express");

const {
 getPhases,
  createPhase,
  updatePhase,
  deletePhase,
  getPhasesByProject,
} = require("../controllers/phases");

const router = Router();

router.get("/", getPhases);
router.get("/:idProject", getPhasesByProject);
router.post("/", createPhase);
router.put("/update/:id", updatePhase);
router.delete("/", deletePhase);
module.exports = router;
