const express = require("express");
const { User } = require("../models");
const { authenticate, authorize } = require("../middleware/auth");

const router = express.Router();

router.use(authenticate, authorize(["admin"]));

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
router.get("/:id/status", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json({ status: user.status });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});
router.patch("/:id", async (req, res) => {
  const { name, surname, email } = req.body;
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update({ name, surname, email });
    res.json({ message: "User updated", user });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/:id/block", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update({ status: "blocked" });
    res.json({ message: "User blocked", user });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/:id/unblock", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update({ status: "active" });
    res.json({ message: "User unblocked", user });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/:id/admin", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update({ role: "admin" });
    res.json({ message: "User promoted to admin", user });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.patch("/:id/remove-admin", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update({ role: "user" });
    res.json({ message: "Admin rights removed", user });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;