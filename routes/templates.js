const express = require("express");
const { Template, User } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
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
    const template = await Template.create(req.body);
    res.status(201).json(template);
  }
);

router.put(
  "/:id",
  authenticate,
  authorize(["admin", "user"]),
  async (req, res) => {
    try {
      const template = await Template.findByPk(req.params.id);
      if (template) {
        await template.update(req.body);
        res.json(template);
      } else {
        res.status(404).json({ error: "Template not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the template" });
    }
  }
);
router.post("/:id/like", async (req, res) => {
  try {
    const templateId = req.params.id;
    const userId = req.body.userId;
    const existingLike = await Like.findOne({ where: { userId, templateId } });

    if (existingLike) {
      return res
        .status(400)
        .json({ error: "User has already liked this template" });
    }
    await Like.create({ userId, templateId });
    const template = await Template.findByPk(templateId);
    template.likes += 1;
    await template.save();

    res.status(200).json({ message: "Template liked successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while liking the template" });
  }
});
module.exports = router;
