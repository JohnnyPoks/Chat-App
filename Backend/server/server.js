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
                success: true,
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
                success: true,
                user,
              })
            );
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      case "createChat":
        try {
          const newChat = await createChat(parsedData.newChat);
          newChat &&
            ws.send(
              JSON.stringify({
                type: "chatCreated",
                success: true,
                newChat,
              })
            );
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      case "getChats":
        try {
          const chats = await getAllChats(parsedData.senderId);
          chats &&
            ws.send(
              JSON.stringify({
                type: "chatsReceived",
                success: true,
                chats,
              })
            );
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      case "newMessage":
        try {
          const NewMessage = await storeMessage(parsedData.message);
          NewMessage &&
            ws.send(
              JSON.stringify({
                type: "storedMessage",
                success: true,
                NewMessage,
              })
            );
          wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify(NewMessage));
            }
            console.log("Message Broadcasted Successfully");
          });
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      default:
        ws.send(JSON.stringify({ type: "error", message: "Unknown command" }));
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log(`WebSocket server running on ws://localhost:${port}`);
