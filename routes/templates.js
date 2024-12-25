const express = require("express");
const { Template } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  const templates = await Template.findAll();
  res.json(templates);
});

router.post("/", authenticate, authorize(["admin", "user"]), async (req, res) => {
  const template = await Template.create(req.body);
  res.status(201).json(template);
});

router.get("/:id", async (req, res) => {
  const template = await Template.findByPk(req.params.id);
  if (template) res.json(template);
  else res.status(404).json({ error: "Template not found" });
});

module.exports = router;
