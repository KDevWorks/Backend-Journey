const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

app.get('/register', (req, res) => {
    const {user, pass} = req.query;
    res.send(`User: ${user}, Password: ${pass}`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("User registration completed");
});