const { Router } = require("express");

const {
 getPhases,
  createPhase,
  updatePhase,
  deletePhase,
  getPhasesByProject,
} = require("../controllers/phases");
const { validateSchema } = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");
const { createPhaseSchema } = require("../schemas/PhaseSchema");

const router = Router();

router.get("/", getPhases);
router.get("/:idProject", getPhasesByProject);
router.post("/new",[validateSchema(createPhaseSchema),validateJwt,validatePermissions], createPhase);
router.patch("/update/:id",[validateSchema(createPhaseSchema),validateJwt, validatePermissions], updatePhase);
router.delete("/:id",[validateJwt, validatePermissions], deletePhase);
module.exports = router;
