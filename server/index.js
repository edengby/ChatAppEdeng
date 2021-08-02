const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const socket = require("./socketio");
const users = require("./routes/users");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/v1/users', users);

const server = app.listen("3002", () => {
  console.log("Server Running on Port 3002...");
});

socket.openSocket(server);

process.on('unhandledRejection', (err, promise) => {
  console.log(`error: ${err}`);
  server.close(() => { process.exit(1); });
});


