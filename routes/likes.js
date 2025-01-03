const express = require("express");
const { Template, User, Like } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");
const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  const templates = await Template.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "surname"],
      },
      {
        model: Like,
        where: { userId: req.user.id },
        required: false,
        attributes: ["liked"],
      },
    ],
  });
  const templatesWithLikeStatus = templates.map((template) => ({
    ...template.toJSON(),
    likedByCurrentUser:
      template.Likes.length > 0 ? template.Likes[0].liked : false,
  }));

  res.json(templatesWithLikeStatus);
});

router.get("/:id", authenticate, async (req, res) => {
  const template = await Template.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ["name", "surname"],
      },
      {
        model: Like,
        where: { userId: req.user.id },
        required: false,
        attributes: ["liked"],
      },
    ],
  });

  if (template) {
    const templateWithLikeStatus = {
      ...template.toJSON(),
      likedByCurrentUser:
        template.Likes.length > 0 ? template.Likes[0].liked : false,
    };
    res.json(templateWithLikeStatus);
  } else {
    res.status(404).json({ error: "Template not found" });
  }
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

router.post("/:id/like", authenticate, async (req, res) => {
  try {
    const templateId = req.params.id;
    const userId = req.user.id;
    const existingLike = await Like.findOne({ where: { userId, templateId } });

    if (existingLike) {
      existingLike.liked = !existingLike.liked;
      await existingLike.save();
    } else {
      await Like.create({ userId, templateId, liked: true });
    }

    const template = await Template.findByPk(templateId, {
      include: [{ model: Like }],
    });

    const likesCount = template.Likes.filter((like) => like.liked).length;
    template.likes = likesCount;
    await template.save();

    res
      .status(200)
      .json({ message: "Template like status updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the like status" });
  }
});

module.exports = router;
