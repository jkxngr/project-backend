const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CheckboxOption = sequelize.define(
  "CheckboxOption",
  {
    option_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "templates",
        key: "id",
      },
    },
    question_key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    option_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "checkbox_options",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = CheckboxOption;
