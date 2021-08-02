const socket = require("socket.io");

const openSocket = (server) => {
    const io = socket(server);

    io.on("connection", (socket) => {
        console.log(socket.id);

        socket.on("join_room", (data) => {
            socket.join(data);
            console.log("User Joined Room: " + data);
        });

        socket.on("send_message", (data) => {
            console.log(data);
            socket.to(data.room).emit("receive_message", data.content);
        });

        socket.on("disconnect", () => {
            console.log("USER DISCONNECTED");
        });
    });
}

exports.openSocket = openSocket;
