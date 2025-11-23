const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

const port = 8080;

app.listen(port,()=>{
    console.log("Listing from port : ", port);
});

app.get("/ig/:username",(req,res)=>{
    // res.send("welcome to the instagram");
    let { username } = req.params;

    let data = require("./data.json");
    let userdata = data[username]
    if(userdata){
 // console.log(userdata);
    res.render("instagram2",{userdata});
    }else
    {
     res.render("error");   
    }
   
});