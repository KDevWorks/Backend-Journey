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
const Chat = require("./models/chat.js");

let chats = [
    {
        from: "priya",
        to: "sangita",
        msg: "hello sangita.. How are you",
        created_at: new Date()
    },
    {
        from: "sangita",
        to: "priya",
        msg: "Hi Priya! I am good, how about you?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "sangita",
        msg: "I'm doing great. Working on a MongoDB project!",
        created_at: new Date()
    },
    {
        from: "sangita",
        to: "priya",
        msg: "That sounds interesting! What are you building?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "sangita",
        msg: "Just a basic CMS for chat history.",
        created_at: new Date()
    },
    {
        from: "sangita",
        to: "priya",
        msg: "Nice! Are you using the insertMany command?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "sangita",
        msg: "Yes, exactly. It's much faster for bulk data.",
        created_at: new Date()
    },
    {
        from: "sangita"
        , to: "priya",
        msg: "Agreed. Let me know if you need any help with queries.",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "sangita",
        msg: "Sure! I might need help with the aggregation later.",
        created_at: new Date()
    },
    {
        from: "sangita",
        to: "priya",
        msg: "No problem. Happy coding!",
        created_at: new Date()
    }
];

Chat.insertMany(chats)