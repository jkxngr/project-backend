const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Template = sequelize.define(
  "Template",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "topics", 
        key: "topic_id", 
      },
    },
    custom_string1_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_string1_question: {
      type: DataTypes.STRING,
    },
    custom_string2_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_string2_question: {
      type: DataTypes.STRING,
    },
    custom_string3_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_string3_question: {
      type: DataTypes.STRING,
    },
    custom_string4_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_string4_question: {
      type: DataTypes.STRING,
    },
    custom_int1_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_int1_question: {
      type: DataTypes.STRING,
    },
    custom_int2_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_int2_question: {
      type: DataTypes.STRING,
    },
    custom_int3_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_int3_question: {
      type: DataTypes.STRING,
    },
    custom_int4_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_int4_question: {
      type: DataTypes.STRING,
    },
    custom_text1_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_text1_question: {
      type: DataTypes.STRING,
    },
    custom_text2_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_text2_question: {
      type: DataTypes.STRING,
    },
    custom_text3_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_text3_question: {
      type: DataTypes.STRING,
    },
    custom_text4_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_text4_question: {
      type: DataTypes.STRING,
    },
    custom_checkbox1_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_checkbox1_question: {
      type: DataTypes.STRING,
    },
    custom_checkbox2_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_checkbox2_question: {
      type: DataTypes.STRING,
    },
    custom_checkbox3_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_checkbox3_question: {
      type: DataTypes.STRING,
    },
    custom_checkbox4_state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    custom_checkbox4_question: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    tableName: "templates",
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Template;
