const express = require("express");
const app = express();


const port = 3000;
app.listen(port, () => {
    console.log("Example app listing a port", port);
})

// app.use((req, res) => {
//     console.log("new incoming request");
//     let code = "<h1>Fruits</h1> <ul> <li>Apple</li>  <li>Banana</li> </ul>"
//     res.send(code);
// });

// res.send({
//     name: "Apple",
//     color: "red"
// });

// can't send at one time multipe response

app.get("/", (req, res) => {
    res.send("This respone sent by home page");
});

app.get("/about", (req, res) => {
    res.send("This respone sent by aobut page");
});

app.get("/contact", (req, res) => {
    res.send("This respone sent by contact page");
});

// app.get("/*", (req, res) => {
//     // Set the HTTP status code to 404 (Not Found) before sending the response
//     res.status(404).send("This path doesn't exist");
// });
//use only before version 5 of express

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let {username,id } = req.params
    res.send(`Welcome to the page of ${username}`);
});

app.get("/search",(req, res) =>{
    let {q} = req.query;
    if(!q){
        res.send("Nothing search");
    }
    res.send(`Hello : ${q}`);
})
