const express = require("express");
const { Topic } = require("../models");
const sequelize = require("../config/database");

const router = express.Router();

router.get("/", async (req, res) => {
  const topics = await Topic.findAll();
  res.json(topics);
});

module.exports = router;
