const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();
const SECRET_KEY = "96a5cfae10a7c61bee9544ec0ffa8c953032fd8ae36d3463e0453965cd6c304b";

router.post("/register", async (req, res) => {
  try {
    const { email, password, name, surname } = req.body;
    const user = await User.create({ email, password, name, surname });
    const token = jwt.sign({ userId: user.user_id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
    res.status(201).json({
      user: {
        id: user.user_id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.user_id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
  res.json({
    user: {
      id: user.user_id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      role: user.role,
    },
    token,
  });
});

module.exports = router;