const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello from home");
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/dice", (req, res) => {
    let val = Math.floor(Math.random() * 6) + 1;
    res.render("diceval", { val });
});

app.get("/ig/:username/:password", (req, res) => {
    let { username } = req.params;
    console.log(username);
    let followers = ["danny","arya", "sansa", "rob", "belish"];
    res.render("instagram", {username,followers});
    // res.render("insta",)
})



app.listen(port, () => {
    console.log("Listening no port: ", port);
});

app.get("/",(req,res)=>{
    console.log("reqest was sent from local fort");
})