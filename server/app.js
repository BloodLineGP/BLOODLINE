const cors = require("cors");
const express = require("express");


const { createServer } = require("node:http");
const errorHandler = require("./middlewares/errorHandler");

const socketio = require("socket.io");
const http = require("http");


const userController = require("./controller/userController");
const postController = require("./controller/postController");
const authentication = require("./middlewares/authentication");
const authorization = require("./middlewares/authorization");


const { time } = require("node:console");

const port = 3000;



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

app.get("/posts/mypost", postController.readMyPosts);
app.get("/posts/request", postController.readRequestPosts);
app.get("/posts/donor", postController.readDonorPosts);
app.get("/posts/:id", postController.postDetail); //showing post detail
app.post("/posts", postController.createPost); //creating new post

//authorization happen here
app.put("/posts/:id", authorization, postController.updatePost); //updating post, but only can be done according to the user who created it.
app.delete("/posts/:id", authorization, postController.deletePost);

io.on("connection", (socket) => {


    console.log("a user connected", socket.id);

    socket.on("join", ({ name, id }, callback) => {
        console.log("a user connected", socket.id, name);

        const room = id;
        console.log(name, id, `Socket On Join`);


        socket.emit("message", {
            user: "admin",
            text: `You are requesting to Chat with ${name}`,
        });

        socket.broadcast.to(console.log(`welcome to room post${id}`));
        socket.join(id);

        socket.to(room).emit("roomData", { users: `Room ${id}` });


        callback();
    });


    socket.on("sendMessage", ({ message, id, name }) => {
        // const user = socket.id;

        console.log(message, `INI DARI BACKEND MSG`, id, name);
        socket.to(id).emit("message", { text: message, user: name });

    });

    socket.on("disconnect", () => {
        const user = socket.id;
        console.log("user left");
        if (user) {

            socket.to(user).emit("message", {

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
