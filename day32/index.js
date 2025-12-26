const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
// For handling file and directory paths
const path = require("path");

// Serve static files from the "public" directory
app.use(express.static("public/css"));
app.use(express.static(path.join(__dirname, "public/js")));

// Set the views directory
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  console.log("Home Page Requested");
  res.render("home.ejs")
});

app.get("/diceroll", (req, res) => {
  const num = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num });
})

app.get("/ig/:username", (req, res) => {
  let followers = ["allen", "bob", "charlie", "david", "eve", "frank"];
  const { username } = req.params;
  console.log(username);
  res.render("instagram.ejs", { username, followers });
})

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);

  const instaData = require("./data.json");
  const data = instaData[id];

  res.render("instagram2", { userdata: data })
  // console.log(data);
})