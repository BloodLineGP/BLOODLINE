const cors = require("cors");
const express = require("express");

const { createServer } = require("node:http");
const errorHandler = require("./middlewares/errorHandler");

const userController = require("./controller/userController");
const postController = require("./controller/postController");
const authentication = require("./middlewares/authentication");
const authorization = require("./middlewares/authorization");

const { time } = require("node:console");

const port = 3000;

const app = express();

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.use(errorHandler);
module.exports = app;
