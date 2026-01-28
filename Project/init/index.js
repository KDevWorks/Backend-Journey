const mongoose = require("mongoose");
const List = require("../models/Listing.js");
const initData = require("./data.js");

main()
    .then((res) => {
        console.log("Successfully Connect to the MongoDB");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Project");
}

const initDB = async () => {
    await List.deleteMany({});
    await List.insertMany(initData.data);
    console.log("Initialize to database")
}
initDB();