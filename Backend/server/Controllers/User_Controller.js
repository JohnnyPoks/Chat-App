const User = require("../Models/User_Model");

const createUser = async (newUserData) => {
  console.log(newUserData);

  try {
    const user = await User.create({
      username: newUserData.username,
      phoneNumber: newUserData.phoneNumber,
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user", error);
  }
};

const loginUser = async (number) => {
  try {
    const user = await User.findOne({ where: { number } });
    return user;
  } catch (error) {
    throw new Error("Failed to login user", error);
  }
};

module.exports = {
  createUser,
  loginUser,
};
