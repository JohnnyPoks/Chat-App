const sequelize = require("../config/db");

sequelize
  // .sync()
  .sync({ force: true })
  // .sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
