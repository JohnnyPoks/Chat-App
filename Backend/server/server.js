require("dotenv").config();
const WebSocket = require("ws");
const {sync} = require("./middleware/sync");
const { createUser } = require("./Controllers/User_Controller");
const { createMessage } = require("./Controllers/Message_Controller");

const port = process.env.PORT || 8000;
const wss = new WebSocket.Server({ port: port });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", async (data) => {
    const parsedData = JSON.parse(data);

    switch (parsedData.type) {
      case "createUser":
        try {
          const user = await createUser(
            parsedData.username,
            parsedData.password,
            parsedData.email
          );
          ws.send(JSON.stringify({ type: "userCreated", user }));
        } catch (error) {
          ws.send(JSON.stringify({ type: "error", message: error.message }));
        }
        break;

      case "sendMessage":
        try {
          const message = await createMessage(
            parsedData.content,
            parsedData.senderId,
            parsedData.receiverId
          );
          ws.send(JSON.stringify({ type: "messageSent", message }));
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
