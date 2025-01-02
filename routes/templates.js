const express = require("express");
const { Template, User, CheckboxOption } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  const templates = await Template.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "surname"],
      },
      {
        model: CheckboxOption,
      },
    ],
  });
  res.json(templates);
});

router.post(
  "/",
  authenticate,
  authorize(["admin", "user"]),
  async (req, res) => {
    try {
      const { title, content, user_id, checkboxOptions } = req.body;
      const template = await Template.create({ title, content, user_id });

      if (checkboxOptions && checkboxOptions.length > 0) {
        for (const option of checkboxOptions) {
          await CheckboxOption.create({
            template_id: template.template_id,
            question_key: option.question_key,
            option_text: option.option_text,
          });
        }
      }

      res.status(201).json(template);
    } catch (error) {
      res.status(400).json({ error: "Template creation failed" });
    }
  }
);
router.get("/:id", async (req, res) => {
  const template = await Template.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ["name", "surname"],
      },
      {
        model: CheckboxOption,
      },
    ],
  });
  if (template) res.json(template);
  else res.status(404).json({ error: "Template not found" });
});

module.exports = router;
