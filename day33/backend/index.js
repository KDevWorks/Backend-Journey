const express = require("express");
const app= express();

const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req,res)=>{
    let {user,password} = req.query;
    res.send(`Standard GET Request,Welcome @${user}`);
});
app.post("/register", (req,res)=>{
    console.log(req.body);
    let {user} = req.body;
    res.send(`Standard POST Request,Welcome @${user}`);
});
app.listen(port, ()=>{
    console.log("Listing port to ",port);
});