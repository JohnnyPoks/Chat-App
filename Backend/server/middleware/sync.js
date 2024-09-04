const sequelize = require("../config/db");
const User = require("../Models/User_Model");
const Message = require("../Models/Message_Model");

sequelize
  //   .sync()
  .sync({ force: true })
  //   .sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
