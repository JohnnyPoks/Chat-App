const User = require("../Models/User_Model");

const createUser = async (newUserData) => {
  const { username, phoneNumber } = newUserData;

  try {
    const user = await User.create({
      username,
      phoneNumber,
    });
    return user;
  } catch (error) {
    throw new Error(
      "The above number is already registered. Please use a different number or login",
      error
    );
  }
};

const loginUser = async (number) => {
  console.log(number);

  try {
    const user = await User.findOne({ where: { phoneNumber: number } });

    if (!user) {
      throw new Error(
        "The above number is not registered. Please use a different number or SignUp"
      );
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const checkIfUsersExist = async ({ type, data }) => {
  console.log(type, data);

  try {
    if (type === "phoneNumbers") {
      // check if users exist using phone numbers
      const sender = await User.findOne({
        where: { phoneNumber: data.senderNumber },
      });
      const receiver = await User.findOne({
        where: { phoneNumber: data.receiverNumber },
      });

      if (!receiver || !sender) {
        throw new Error(
          "Failed to create chat. User is not registered yet... Please chat with somenone else"
        );
      }
      return { sender, receiver };
    }

    // check if users exist using id
    if (type === "UserId") {
      const receiver = await User.findOne({
        where: { id: data },
      });
      return receiver;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  createUser,
  loginUser,
  checkIfUsersExist,
};
