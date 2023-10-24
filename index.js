import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // options
});

io.setMaxListeners(5);
io.on("connection", (socket) => {
  console.log(`${socket} has connected to the server`);
  socket.on("chat-message", (message) => {
    console.log(message);
    io.emit("realtime-chat", message);
  });
  socket.on("user-name", (name) => {
    console.log(name);
  });
});

httpServer.listen(3000);
