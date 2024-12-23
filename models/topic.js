const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Topic = sequelize.define(
  "Topic",
  {
    topic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "topics", 
    freezeTableName: true,   
  }
);

module.exports = Topic;
