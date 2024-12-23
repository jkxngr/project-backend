const express = require("express");
const templatesRoutes = require("./templates");
const formsRoutes = require("./forms");
const topicsRoutes = require("./topics")
const router = express.Router();
router.use("/templates", templatesRoutes);
router.use("/forms", formsRoutes);
router.use("/topics", topicsRoutes);

module.exports = router;
