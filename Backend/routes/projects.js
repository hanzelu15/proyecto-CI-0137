const { Router } = require("express");
const { check } = require("express-validator");
const {
  getAllProjects,
  createProject,
  readProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");
const { validateFields } = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", readProject);
router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("manager", "El encargado es obligatorio").not().isEmpty(),
    validateFields,
  ],
  createProject
);
router.patch("/update/:id", [validateJwt, validatePermissions], updateProject);
router.delete("/delete/:id", [validateJwt, validatePermissions], deleteProject);
module.exports = router;
