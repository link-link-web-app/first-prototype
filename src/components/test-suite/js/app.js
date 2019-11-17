const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/posts");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", callback => {
  console.log("connection succeeded");
});

// import schemas
var Post = require("../models/post");

// init express app
const app = express();

// middlewares
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
  Post.find({}, "title description", (error, posts) => {
    if (error) console.log(error);
    res.send({
      posts: posts
    });
  }).sort({ id: -1 });
});

// post request
app.post("/posts", (req, res) => {
  var db = req.db;
  var newTitle = req.body.title;
  var newDescription = req.body.description;
  var newPost = new Post({
    title: newTitle,
    description: newDescription
  });
  newPost.save(error => {
    if (error) console.log(error);
    res.send({
      success: true,
      message: "Post saved successfully!"
    });
  });
});

// get a single post
app.get("/post/:id", (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, "title description", (error, post) => {
    if (error) console.log(error);
    res.send(post);
  });
});

// update a post
app.put("/posts/:id", (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, "title description", (error, post) => {
    if (error) console.log(error);
    // updates the post with the req object
    post.title = req.body.title;
    post.description = req.body.description;
    post.save(error => {
      if (error) console.log(error);
      res.send({
        success: true
      });
    });
  });
});

// delete a post
app.delete("/posts/:id", (req, res) => {
  var db = req.db;
  Post.remove(
    {
      _id: req.params.id
    },
    (error, post) => {
      if (error) res.send(error);
      res.send({
        success: true
      });
    }
  );
});

app.listen(process.env.port || 8081, () => {
  console.log("now listening for requests");
});
