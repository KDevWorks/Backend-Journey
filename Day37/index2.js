const { faker } = require('@faker-js/faker');
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
    console.log("Database connected successfully");
})

connection.query("show tables", (err, result) => {
    if (err) throw err;
    console.log(result);
})

let q = `
        CREATE TABLE IF NOT EXISTS empInfo(
        id VARCHAR(50) ,
        username VARCHAR(50) ,
        email VARCHAR(50) ,
        password VARCHAR(50) 
        )
`;

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let data = [];
// console.log(data);
for (let i = 1; i <=100; i++) {
    data.push(getRandomUser());
}

let q1 = `INSERT INTO empInfo(id, username, email, password) VALUES? `;

connection.query(q1,[data],(err, result) =>{
    if(err) throw err;
    console.log(result)
})
connection.end();