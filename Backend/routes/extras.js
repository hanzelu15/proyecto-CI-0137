const { Router } = require("express");

const {
    getExtra,
    createExtra,
    updateExtra,
    deleteExtra,
    getExtrasByUnit
} = require("../controllers/extras");
const { validateSchema } = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");
const { ExtraSchema } = require("../schemas/ExtraSchema");

const router = Router();

router.get("/", getExtra);
router.get("/:idUnit", getExtrasByUnit);
router.post("/new",  [validateSchema(ExtraSchema),validateJwt,validatePermissions],createExtra);
router.patch("/update/:id", [validateSchema(ExtraSchema),validateJwt,validatePermissions], updateExtra);
router.delete("/:id",  [validateJwt,validatePermissions],deleteExtra);
module.exports = router;