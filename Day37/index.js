// const { faker } = require('@faker-js/faker');

// let getRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }

// console.log(getRandomUser());

const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Krishna@4476",
        database: "college"
    }
);

connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected Successfully");
});

// Show databases
connection.query("SHOW Tables", (err, result) => {
    if (err) throw err;
    console.log(result);
});

// Create table safely
let q = `
// CREATE TABLE IF NOT EXISTS userInfo(
//     userid VARCHAR(50) PRIMARY KEY,
//     username VARCHAR(50) NOT NULL,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL
// )
// `;

// connection.query(q, (err, result) => {
//     if (err) throw err;
//     console.log("Table ready");
// });

let user = [
    ["123c", "bob", "abcd2@gmail.com", "abc111"],
    ["123d", "bob", "abcd3@gmail.com", "abc111"]];

const sql = `INSERT INTO userInfo (userid, username, email, password) VALUES ?`;

// connection.query(sql, [user], (err, result) => {
//     if (err) throw err;
//     console.log("User inserted:", result);
// });

connection.query("SELECT * FROM UserInfo;", (err, result) => {
    console.log(result);
})
// // Close connection
connection.end();

