const express = require("express");
const { Template, User } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");
const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  const templates = await Template.findAll({
    include: {
      model: User,
      attributes: ["name", "surname"],
    },
  });
  res.json(templates);
});
router.get("/:id", async (req, res) => {
  const template = await Template.findByPk(req.params.id);
  if (template) res.json(template);
  else res.status(404).json({ error: "Template not found" });
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
      res
        .status(500)
        .json({ error: "An error occurred while updating the template" });
    }
  }
);
module.exports = router;