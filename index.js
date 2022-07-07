const express = require("express");

// for intialializing socket
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = 5000;
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

const onlineUsers = {};

//recieving the event
io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });


  
});

const UserRouter = require("./routers/userRouters");
const cors = require("cors");

//middleware to convert client json data to javascript
app.use(express.json());

//cors is used for allowing front-end request
app.use(cors({ origin: ["http://localhost:3000"] }));



app.use("/user", UserRouter);

//route or endpoint
app.get("/", (req, res) => {
  res.send("response from express");
});

httpServer.listen(port, () => {
  console.log("server started");
});
