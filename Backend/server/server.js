require("dotenv").config();
const WebSocket = require("ws");
const { sync } = require("./middleware/sync");
const { createChat, getAllChats } = require("./Controllers/Chat_Controller");
const { createUser, loginUser } = require("./Controllers/User_Controller");
const {
  storeMessage,
  getChatMessages,
} = require("./Controllers/Message_Controller");

const port = process.env.PORT || 8000;
const wss = new WebSocket.Server({ port: port });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", async (data) => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);

    switch (parsedData.type) {
      case "createUser":
        try {
          const newUser = await createUser(parsedData.newUser);
          newUser &&
            ws.send(
              JSON.stringify({
                type: "userCreated",
                message: "New User created successfully",
                newUser,
              })
            );
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      case "loginUser":
        try {
          const user = await loginUser(parsedData.number);
          user &&
            ws.send(
              JSON.stringify({
                type: "userLoggedIn",
                message: "User logged in successfully",
                user,
              })
            );
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      // case "sendMessage":
      //   try {
      //     const message = await createMessage(
      //       parsedData.content,
      //       parsedData.senderId,
      //       parsedData.receiverId
      //     );
      //     ws.send(JSON.stringify({ type: "messageSent", message }));
      //   } catch (error) {
      //     ws.send(JSON.stringify({ type: "error", message: error.message }));
      //   }
      //   break;

      default:
        ws.send(JSON.stringify({ type: "error", message: "Unknown command" }));
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log(`WebSocket server running on ws://localhost:${port}`);
