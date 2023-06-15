const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

// Créez une instance du sujet observé (ChatSystem)
const ChatSystem = require("./ChatSystem");
const chatSystem = new ChatSystem();

io.on("connection", (socket) => {
  // When connect
  console.log("A user connected.");

  // Take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);

    // Add the observer (client) to the chatSystem
    chatSystem.subscribe(socket);

    io.emit("getUsers", users);
  });

  // Send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });

    // Notify the observers (clients) with the message
    chatSystem.notify({ senderId, receiverId, text });
  });

  // When disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);

    // Remove the observer (client) from the chatSystem
    chatSystem.unsubscribe(socket);
  });
});
