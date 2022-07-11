const { Router } = require("express");

const {
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit,
    getUnitsByPhase
} = require("../controllers/units");
const { validateSchema } = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");
const { createUnitSchema } = require("../schemas/UnitSchema");

const router = Router();

router.get("/", getUnit);
router.get("/:idPhase", getUnitsByPhase);
router.post("/new", [validateSchema(createUnitSchema),validateJwt,validatePermissions],createUnit);
router.patch("/update/:id",[validateSchema(createUnitSchema),validateJwt,validatePermissions], updateUnit);
router.delete("/:id", [validateJwt,validatePermissions],deleteUnit);
module.exports = router;