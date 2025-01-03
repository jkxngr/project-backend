const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Like = sequelize.define("Like", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "user_id",
    },
    onDelete: "CASCADE", 
    onUpdate: "CASCADE",
  },
  templateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "templates",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  liked: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Like;
