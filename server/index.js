const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const cors = require("cors")

const router = require("./router")
const { AddUser, RemoveUser, GetUserById, GetUsersByRoom } = require("./users-data")

// use 3030 port if there is no environment port
const PORT = process.env.PORT || 3030

// create server app
const app = express()
const server = http.createServer(app)

// attach router to express app
app.use(router)

// use cors
app.use(cors({
    origin: "*"
}))


// attach io to server
const io = socketio(server, {
    cors: {
        origin: "*"
    }
})


// configure socket.io
io.on("connection", (socket) => {
    // use callback for client-side error handling
    socket.on("join", ({ username, room }, callback) => {
        const { error, user } = AddUser(socket.id, username, room)
        if (error) return callback(error);
        socket.join(user.room);

        // send welcome message to connected user
        socket.emit("message", { username: "Big Brother", text: `Welcome to ${user.room} room, ${user.name}!` });

        // notify other users in room
        socket.broadcast.to(user.room).emit("message", { username: "Big Brother", text: `${user.name} in our family now!` });
    });

    socket.on("send-message", (message, callback) => {
        const user = GetUserById(socket.id);
        if (user) {
            io.to(user.room).emit("message", { username: user.name, text: message });
        }
        callback();
    });

    socket.on("disconnect", () => {
        const user = RemoveUser(socket.id)
        if (user) {
            io.to(user.room).emit("message", { username: "Big Brother", text: `${user.name} left us :(` })
        }
    })
})


server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})
