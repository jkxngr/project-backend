const express = require("express");
const { Form } = require("../models");
const router = express.Router();

router.get("/template/:templateId", async (req, res) => {
  const forms = await Form.findAll({ where: { template_id: req.params.templateId } });
  res.json(forms);
});
router.post("/", async (req, res) => {
  const form = await Form.create(req.body);
  res.status(201).json(form);
});

module.exports = router;
