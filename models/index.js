const sequelize = require("../config/database");
const Template = require("./template");
const Form = require("./form");
const Topic = require("./topic");
Template.hasMany(Form, { foreignKey: "template_id" });
Form.belongsTo(Template, { foreignKey: "template_id" });
Topic.hasMany(Template, { foreignKey: "topic_id" });
Template.belongsTo(Topic, { foreignKey: "topic_id" });
module.exports = { sequelize, Template, Form , Topic };
