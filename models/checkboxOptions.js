const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CheckboxOption = sequelize.define(
  "CheckboxOption",
  {
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
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = CheckboxOption;
