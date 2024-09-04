const User = require("../Models/User_Model");

const createUser = async (username, password, email) => {
  try {
    const user = await User.create({ username, password, email });
    return user;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

module.exports = {
  createUser,
};
