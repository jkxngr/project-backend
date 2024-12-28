const express = require("express");
const { User } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");

const router = express.Router();

router.use(authenticate, authorize(["admin"]));

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.patch("/:id/block", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    user.update({ blocked: true });
    res.json({ message: "User blocked" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/:id/unblock", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    user.update({ blocked: false });
    res.json({ message: "User unblocked" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/:id/admin", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    user.update({ role: "admin" });
    res.json({ message: "User promoted to admin" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/users/:id/remove-admin", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    user.update({ role: "user" });
    res.json({ message: "Admin rights removed" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;