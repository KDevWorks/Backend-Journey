const express = require("express");
const mongoose = require("mongoose");
const List = require("./models/Listing.js");
const ejsMate = require("ejs-mate")
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const path = require("path");
app.set("view engine", "ejs");
app.engine('ejs', ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public/css")));

main()
    .then((res) => {
        console.log("Successfully Connect to the MongoDB");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Project");
}

//Show rout for all listing

app.get("/list", async (req, res) => {
    // const count = await List.countDocuments({});
    const allListing = await List.find();
    res.render("./listing/index.ejs", { allListing });
});

//show rout for individual list
app.get("/listing/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await List.findById(id);
    // console.log(listing);
    res.render("./listing/show.ejs", { listing });
});

//new adding rout
app.get("/list/new", (req, res) => {
    res.render("./listing/new.ejs");
})

//New rout for adding new list
app.post("/list/new/add", async (req, res) => {
    let newList = req.body;
    let newlisting = new List(newList);
    await newlisting.save();
    res.redirect("/list");
})

//edit rout
app.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await List.findById(id);
    res.render("./listing/edit.ejs", { listing });
});

//update rout
app.put("/list/:id/edit", async (req, res) => {
    let { id } = req.params;
    // let location = req.body;
    // console.log(location);
    await List.findByIdAndUpdate(id, { ...req.body });
    res.redirect("/list")
})

//delete rout
app.delete("/list/:id/delete", async (req, res) => {
    let { id } = req.params;
    let deletedList = await List.findByIdAndDelete(id,);
    console.log(deletedList);
    res.redirect("/list")
})
app.listen("8000", () => {
    console.log("Listing request on 8000");
})
