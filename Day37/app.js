const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const path = require("path");
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Krishna@4476",
        database: "college"
    }
);

connection.connect(err => {
    if (err) throw err;
    console.log("Database connected successfully");
});

app.listen("8000", () => {
    console.log(`Server is running on http://localhost:8000`);
});

connection.query("show tables;", (err, result) => {
    console.log(result);
})

try {
    app.get("/", (req, res) => {
        let q = `SELECT COUNT(*) FROM empInfo`;
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result);
            let data = result[0]['COUNT(*)'];
            console.log(data);
            res.render("home.ejs", { data });
        });

    });
} catch {
    res.send("Error in Database...")
};

app.get("/user", (req, res) => {
    let q = `SELECT * FROM empInfo;`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(users);
            res.render("showusers.ejs", { users });
        });
    } catch {
        console.log("Some error in database");
    }
})

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM empInfo WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result);
            res.render("edit.ejs", { result });
        })

    } catch {
        console.log("some err in DB");
    }
})

app.patch("/user/:id", (req, res) => {

    let { id } = req.params;
    let { password: formPass, username: newUser } = req.body;

    let q = `SELECT * FROM empInfo WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {

            if (err) throw err;
            let user = result[0];

            console.log(user.password);
            let password = user.password;

            if (password != formPass) {
                res.send("wrong password");
            } else {

                let q2 = `UPDATE empInfo SET username = '${newUser}' where id= '${user.id}' `;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
        })

    } catch {
        console.log("some err in DB");
    }

})


app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;

    let q4 = `SELECT * FROM empInfo WHERE id = '${id}'`;
    connection.query(q4, (err, result) => {

        let userInfo = result[0];
        res.render("delete.ejs", { userInfo });

        app.delete("/user/:id", (req, res) => {

            let { email: userEmail, password: userPass } = req.body;
            console.log(userEmail + userPass);

            if (userInfo.email != userEmail && userInfo.password != userPass) {
                res.send("Wrong email and password");
            } else {
                let q5 = `DELETE FROM empInfo WHERE id= '${id}' `
                connection.query(q5, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });

            };

        });

    });

});

app.get("/user/add", (req, res) => {
    res.render("newReg.ejs");
})

app.post("/user", (req, res) => {
    let { username: nUser, email: nEmail, password: nPass } = req.body;
    let getRandomUser = () => {
        return [
            faker.string.uuid(),
        ];
    };
    let id = getRandomUser();
    console.log(id)
    let q6 = `INSERT INTO empInfo(id,username, email , password ) VALUES('${id}','${nUser}','${nEmail}','${nPass}')`;
    connection.query(q6, (err, result) => {
        res.redirect("/user");
    })

})