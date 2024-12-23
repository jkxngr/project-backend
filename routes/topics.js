const express = require("express");
const { Topic } = require("../models");
const sequelize = require("../config/database");

const router = express.Router();

router.get("/", async (req, res) => {
  const topics = await sequelize.query("SELECT `topic_id`, `name` FROM `topics` AS `Topic`;", { type: sequelize.QueryTypes.SELECT });
  res.json(topics);
});



module.exports = router;
