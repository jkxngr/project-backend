const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Form = sequelize.define("Form", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  template_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  filled_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW, 
  },
  custom_string1_answer: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  custom_string2_answer: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  custom_string3_answer: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  custom_string4_answer: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  custom_int1_answer: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  custom_int2_answer: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  custom_int3_answer: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  custom_int4_answer: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  custom_text1_answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  custom_text2_answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  custom_text3_answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  custom_text4_answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  custom_checkbox1_answer: {
    type: DataTypes.TINYINT(1),
    allowNull: true,
  },
  custom_checkbox2_answer: {
    type: DataTypes.TINYINT(1),
    allowNull: true,
  },
  custom_checkbox3_answer: {
    type: DataTypes.TINYINT(1),
    allowNull: true,
  },
  custom_checkbox4_answer: {
    type: DataTypes.TINYINT(1),
    allowNull: true,
  },
}, {
  timestamps: false, 
  tableName: "filled_forms", 
  freezeTableName: true,   
});

module.exports = Form;
