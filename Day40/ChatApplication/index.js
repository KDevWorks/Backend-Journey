const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const Chat = require("./models/chat.js");

const mongoose = require("mongoose");
main()
    .then((res) => {
        console.log("Successfuly connect to the databse");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.listen("3000", () => {
    console.log("Listing server on port : 3000");
});

app.get("/chats", async (req, res) => {
    let allChats = await Chat.find()
    // console.log(allChats);
    res.render("index.ejs", { allChats });
});

app.get("/chat/new", (req, res) => {
    res.render("newChat.ejs");
});

//add new chat rout
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;

    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    // console.log(newChat);
    // Chat.insertOne(newChat);
    newChat.save()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    res.redirect("/chats");
})

//edit rout
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat })
})

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    await Chat.findByIdAndUpdate(id, { msg: newMsg, created_at: new Date() });
    res.redirect("/chats");
})

// app.put("/chats/:id", async (req, res) => {
//     let { id } = req.params;
//     let { msg: newMsg } = req.body;

//     // 2. Await the update operation
//      await Chat.updateOne(
//         { _id: id },
//         { $set: { msg: newMsg, updated_at: new Date() } }
//     );

//     res.redirect("/chats");
// });

//Destroy route

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    const deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat)
    res.redirect("/chats");
})