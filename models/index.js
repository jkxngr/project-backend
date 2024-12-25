const sequelize = require("../config/database");
const Template = require("./template");
const Form = require("./form");
const Topic = require("./topic");
const User = require("./user");
User.hasMany(Template, { foreignKey: "user_id" });
Template.belongsTo(User, { foreignKey: "user_id" });
Template.hasMany(Form, { foreignKey: "template_id" });
Form.belongsTo(Template, { foreignKey: "template_id" });
Topic.hasMany(Template, { foreignKey: "topic_id" });
Template.belongsTo(Topic, { foreignKey: "topic_id" });
module.exports = { sequelize, Template, Form , Topic , User };
