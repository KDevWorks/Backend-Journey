// Step-1 : require a mongoose package
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Step-2 : Connect mongoDB Database...
main()
  .then((res) => {
    console.log("Successfully Connect to the MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Step-3 : Create a Schema
const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

// Step-4 Create a model/colletion...
const userInfo = mongoose.model("userInfo", userSchema);

const postSchema = new mongoose.Schema({
  postId: String,
  postContent: String,
});
const Post = mongoose.model("Post", postSchema);

// Step-5 : insert data as insertOne
const user1 = new userInfo({
  name: "adam",
  email: "adam@gmail.com",
  age: 23,
});
user1.save();

userInfo.insertMany([
  {
    name: "bob",
    email: "bob@mgailcom",
    age: 33,
  },
  {
    name: "ram",
    email: "ram@mgailcom",
    age: 33,
  },
  {
    name: "prerna",
    email: "peru@mgailcom",
    age: 33
  },
]);

userInfo.insertOne({
  name: "Shradha",
  email: "shradha@gmail.com",
  age: 20,
});
