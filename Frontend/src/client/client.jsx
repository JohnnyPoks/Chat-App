class Client {
  constructor() {
    this.data = {};
    this.socket = new WebSocket("ws://localhost:8080");
    this.socket.onopen = () => {
      console.log("WebSocket connection established");
    };
    // this.socket.onmessage = this.handleMessage.bind(this);
    this.socket.onclose = () => {
      console.log("WebSocket connection closed");
    };
  }

  // handleMessage(event) {
  //   this.data = JSON.parse(event.data);
  //   console.log("Received message from Server:", this.data);
  // }

  createAccount(name, number) {
    const data = {
      type: "createUser",
      newUser: {
        username: name,
        phoneNumber: number,
      },
    };
    this.socket.send(JSON.stringify(data));

    this.socket.addEventListener("message", (event) => {
      this.data = JSON.parse(event.data);
      console.log("Message from server about Created Account: ", this.data);
      return this.data;
    });
    console.log(this.date);

    return this.data;
    // return () => {
    //   this.socket.close();
    // };
  }

  loginUser(number) {
    this.socket.addEventListener("open", (event) => {
      this.socket.send("loginUser", `${number}`);
      console.log(event);
    });
    this.socket.addEventListener("message", (event) => {
      console.log("Message from server about User Logging in : ", event.data);
    });
    return () => {
      this.socket.close();
    };
  }

  // sendMessage(message) {
  //   const messageData = JSON.stringify(message);
  //   this.socket.send(messageData);
  // }

  closeConnection() {
    this.socket.close();
  }
}

export default Client;
