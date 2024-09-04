const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User_Model");

const Message = sequelize.define(
  "Message",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    receiverId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Message;
