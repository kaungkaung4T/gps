



let express = require("express");
let mysql = require("mysql");

let app = express();


mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gps"
})


app.get("/home", fun);




function fun (request, response) {
    response.json({
        "name": "kaungMinKhant",
        "work": "SE"
    });
}


app.listen(5000);
