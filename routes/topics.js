const express = require("express");
const { Topic } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  const topics = await Topic.findAll();
  res.json(topics);
});

module.exports = router;
