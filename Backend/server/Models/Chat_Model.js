const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User_Model");

const Chat = sequelize.define(
  "Chat",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

Chat.belongsTo(User, { as: "user1", foreignKey: "sender_id" });
Chat.belongsTo(User, { as: "user2", foreignKey: "receiver_id" });

module.exports = Chat;
