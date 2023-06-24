



let express = require("express");
let mysql = require("mysql");

let app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gps"
})



app.get("/db", db_page);

function db_page (request, response) {
    const sql = "SELECT * FROM user";
    db.query(sql, db_item);

    function db_item(error, data) {
        if (error) return response.json("Error");
        return response.json(data);
    }
}



app.post("/create", post);

function post (request, response) {
    const sql = "INSERT INTO user (`name`) VALUES (?)";
    const values = [
        request.body.name
    ]
    db.query(sql, [values], create_db);

    function create_db(error, data) {
        if (error) return response.json(error);
        return response.json(data);
    }
}





app.get("/home", fun);

function fun (request, response) {
    response.json({
        "name": "kaungMinKhant",
        "work": "SE"
    });
}


app.listen(5000);
