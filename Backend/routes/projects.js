const { Router } = require("express");
const { check } = require("express-validator");
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");
const { validateSchema } = require("../middleware/validateFields");
const { validateJwt } = require("../middleware/validateJwt");
const { validatePermissions } = require("../middleware/validatePermissions");
const { createProjectSchema } = require("../schemas/ProjectSchema");

const router = Router();

router.get("/", getAllProjects);

router.post(
  "/new", [validateSchema(createProjectSchema),validateJwt,validatePermissions],
  createProject
);
router.patch("/update/:id", [validateJwt, validatePermissions], updateProject);
router.delete("/delete/:id", [validateJwt, validatePermissions], deleteProject);
module.exports = router;
