const cors = require("cors");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const port = 3000;

const errorHandler = require("./middlewares/errorHandler");

const userController = require("./controller/userController");
const postController = require("./controller/postController");
const authentication = require("./middlewares/authentication");
const authorization = require("./middlewares/authorization");

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//here is all the routes
app.post("/register", userController.register); //register user need to have account first before surfing.
app.post("/login", userController.login); //login
app.post("/google-login", userController.googleLogin); //login

app.use(authentication);

app.get("/posts", postController.readPosts); // showing all posts available
app.get("/posts/:id", postController.postDetail); //showing post detail
app.post("/posts", postController.createPost); //creating new post

//authorization happen here
app.put("/posts/:id", authorization, postController.updatePost); //updating post, but only can be done according to the user who created it.
app.delete("/posts/:id", authorization, postController.deletePost);

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("join", ({ name }, callback) => {
        console.log(name);

        socket.emit("message", {
            user: "admin",
            text: `You are requesting to Chat with ${name}`,
        });
        socket.broadcast.to(console.log("welcome"));
        socket.join(name);

        io.to(name).emit("roomData", { users: `${name} is in room` });

        callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = socket.id;

        io.to(user).emit("message", { text: message });

        callback();
    });

    socket.on("disconnect", () => {
        const user = socket.id;
        console.log("user left");
        if (user) {
            io.to(user).emit("message", {
                user: "admin",
                text: `${user} is offline`,
            });
        }
    });
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.use(errorHandler);
module.exports = app;
