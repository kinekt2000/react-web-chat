const express = require("express")
const socketio = require("socket.io")
const http = require("http")

// use 3030 port if there is no environment port
const PORT = process.env.PORT || 3030

const app = express()
const server = http.createServer(app)
const io = socketio(server)

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})
