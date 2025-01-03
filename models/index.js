const sequelize = require("../config/database");
const Template = require("./template");
const Form = require("./form");
const Topic = require("./topic");
const User = require("./user");
const Like = require("./like");
const CheckboxOption = require("./checkboxOptions");
User.hasMany(Template, { foreignKey: "user_id" });
Template.belongsTo(User, { foreignKey: "user_id" });
Template.hasMany(Form, { foreignKey: "template_id" });
Form.belongsTo(Template, { foreignKey: "template_id" });
Topic.hasMany(Template, { foreignKey: "topic_id" });
Template.belongsTo(Topic, { foreignKey: "topic_id" });
Template.hasMany(CheckboxOption, { foreignKey: "template_id" });
CheckboxOption.belongsTo(Template, { foreignKey: "template_id" });
User.hasMany(Like, { foreignKey: "userId" });
Like.belongsTo(User, { foreignKey: "userId" });
Template.hasMany(Like, { foreignKey: "templateId" });
Like.belongsTo(Template, { foreignKey: "templateId" });

module.exports = {
  sequelize,
  Template,
  Form,
  Topic,
  User,
  CheckboxOption,
  Like,
};
