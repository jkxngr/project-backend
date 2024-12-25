const express = require("express");
const templatesRoutes = require("./templates");
const formsRoutes = require("./forms");
const topicsRoutes = require("./topics");
const authRoutes = require("./auth");
const userRoutes = require("./users");

const router = express.Router();
router.use("/templates", templatesRoutes);
router.use("/forms", formsRoutes);
router.use("/topics", topicsRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;
