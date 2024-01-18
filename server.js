const express = require("express");
const app = express();
const users = require("./data/users");
const posts = require("./data/posts");

const port = 3000;

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (post) res.json(post);
});

app.get("/", (req, res) => {
  res.send("All useable routes start with /api!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
