const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Krishna@4476"
    }
);
console.log("conncetion successfuly complete");

connection.query("show databases",(err, result)=>{
    console.log(result);
})

connection.query("use college;",(err, result)=>{
    console.log(result);
})
connection.query("show tables;",(err, result)=>{
    console.log(result);
})
connection.end();