const sequelize = require("../config/db");

sequelize
  // .sync()
  // .sync({ force: true })
  .sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Failed to sync database:", error);
    throw new Error("Server not connected to Database", error);
  });
