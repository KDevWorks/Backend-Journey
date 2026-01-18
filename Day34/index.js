const express = require("express");
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const { v4: uuidv4 } = require("uuid");

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        id: uuidv4(),
        username: "user1",
        content: "This is the first post"
    },
    {
        id: uuidv4(),
        username: "user2",
        content: "This is the second post"
    },
    {
        id: uuidv4(),
        username: "user3",
        content: "This is the third post"
    }
]
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render("show.ejs", { post });
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    let newContent = req.body.content;
    post.content = newContent;
    console.log(post);
    // res.send("Post updated successfully");
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});