const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("Successfully Connect to the MongoDB");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const empSchema = new mongoose.Schema({
    empid: Number,
    empName: String,
    salary: Number
});

const empInfo = new mongoose.model("empInfo", empSchema);

// empInfo.insertOne({
//     empid: 101,
//     name: "sarad dada",
//     salary: 40000
// });

// empInfo.insertMany([
//     { empid: 101, name: "Sarad Dada", salary: 40000 },
//     { empid: 102, name: "Amit Sharma", salary: 45000 },
//     { empid: 103, name: "Priya Pillai", salary: 55000 },
//     { empid: 104, name: "Rajesh Kumar", salary: 38000 },
//     { empid: 105, name: "Sneha Patil", salary: 60000 },
//     { empid: 106, name: "Vikram Singh", salary: 42000 },
//     { empid: 107, name: "Ananya Das", salary: 52000 },
//     { empid: 108, name: "Rohan Mehta", salary: 47000 },
//     { empid: 109, name: "Kavita Rao", salary: 35000 },
//     { empid: 110, name: "Suresh Raina", salary: 65000 }
// ]);

// empInfo.find({ salary: { $gt: 50000 } })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// empInfo.findOne({ empid: 109 })
// .then((res) =>{
//     console.log(res);
// });

// empInfo.findById('69757e847acc39a1faf5b7de')
//     .then((res) => {
//         console.log(res);
//     });

// empInfo.updateOne({ empid: 109 }, { salary: 100000 })
//     .then((res) => {
//         console.log(res);
//     });

// empInfo.updateMany({ salary: { $gt: 70000} }, { salary: 100000 })
//     .then((res) => {
//         console.log(res);
//     });

// empInfo.findOneAndUpdate({ salary: { $gt: 50000 } }, { salary: 100000 }, {new : true})
//     .then((res) => {
//         console.log(res);
//     });

// empInfo.deleteOne({ empid: 103 })
//     .then((res) => {
//         console.log(res)
//     })

// empInfo.deleteMany({ salary: {$gt : 60000}})
//     .then((res) => {
//         console.log(res)
//     })

