const { Router } = require("express");

const {
    getExtra,
    createExtra,
    updateExtra,
    deleteExtra,
    getExtrasByUnit
} = require("../controllers/extras");

const router = Router();

router.get("/", getExtra);
router.get("/:idUnit", getExtrasByUnit);
router.post("/new", createExtra);
router.patch("/update/:id", updateExtra);
router.delete("/:id", deleteExtra);
module.exports = router;