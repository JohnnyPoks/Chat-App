const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Chat = require("./Chat_Model");
const User = require("./User_Model");

const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timeSent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


Message.belongsTo(Chat, { foreignKey: 'chat_id' });
Message.belongsTo(User, { as: 'source', foreignKey: 'source_user_id' });
Message.belongsTo(User, { as: 'destination', foreignKey: 'destination_user_id' });

module.exports = Message;
