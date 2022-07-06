const { Router } = require("express");

const {
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit,
    getUnitsByPhase
} = require("../controllers/units");

const router = Router();

router.get("/", getUnit);
router.get("/:idPhase", getUnitsByPhase);
router.post("/new", createUnit);
router.patch("/update/:id", updateUnit);
router.delete("/", deleteUnit);
module.exports = router;