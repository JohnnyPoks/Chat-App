class Client {
  constructor() {
    // this.data = {};
    this.socket = new WebSocket("ws://localhost:8080");
    this.socket.onopen = () => {
      console.log("WebSocket connection established");
    };
    this.socket.onclose = () => {
      console.log("WebSocket connection closed");
    };
  }

  createAccount(name, number) {
    const data = {
      type: "createUser",
      newUser: {
        username: name,
        phoneNumber: number,
      },
    };
    return new Promise((resolve, reject) => {
      this.socket.send(JSON.stringify(data));
      this.socket.addEventListener("message", (event) => {
        this.data = JSON.parse(event.data);
        if (
          this.data &&
          this.data.success &&
          this.data.type === "userCreated"
        ) {
          resolve(this.data);
        } else {
          reject(this.data);
          console.log(this.data);
        }
      });
    });
  }

  loginUser(number) {
    return new Promise((resolve, reject) => {
      this.socket.send(JSON.stringify({ type: "loginUser", number }));
      this.socket.addEventListener("message", (event) => {
        this.data = JSON.parse(event.data);
        if (
          this.data &&
          this.data.success &&
          this.data.type === "userLoggedIn"
        ) {
          resolve(this.data);
        } else {
          reject(this.data);
          console.log(this.data);
        }
      });
    });
  }

  createChat(senderNumber, receiverNumber) {
    const data = {
      type: "createChat",
      newChat: {
        senderNumber,
        receiverNumber,
      },
    };
    return new Promise((resolve, reject) => {
      this.socket.send(JSON.stringify(data));
      this.socket.addEventListener("message", (event) => {
        this.data = JSON.parse(event.data);
        if (
          this.data &&
          this.data.success &&
          this.data.type === "chatCreated"
        ) {
          resolve(this.data);
        } else {
          reject(this.data);
          console.log(this.data);
        }
      });
    });
  }

  getAllChats(senderId) {
    return new Promise((resolve, reject) => {
      this.socket.send(JSON.stringify({ type: "getChats", senderId }));

      this.socket.addEventListener("message", (event) => {
        this.data = JSON.parse(event.data);
        if (
          this.data &&
          this.data.success &&
          this.data.type === "chatsReceived"
        ) {
          resolve(this.data);
        } else {
          reject(this.data);
          console.log(this.data);
        }
      });
    });
  }

  storeMessage(message) {
    return new Promise((resolve, reject) => {
      this.socket.send(JSON.stringify({ type: "newMessage", message }));

      this.socket.addEventListener("message", (event) => {
        this.data = JSON.parse(event.data);
        if (
          this.data &&
          this.data.success &&
          this.data.type === "storedMessage"
        ) {
          resolve(this.data);
        } else {
          reject(this.data);
          console.log(this.data);
        }
      });
    });
  }

  closeConnection() {
    this.socket.close();
  }
}

export default Client;
