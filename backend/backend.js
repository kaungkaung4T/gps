



let express = require("express");
let mysql = require("mysql");
let ffmpeg = require('fluent-ffmpeg');
let fs = require("fs");
let ffprobe = require('ffprobe'),
ffprobeStatic = require('ffprobe-static');
let exif = require('exiftool');


const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)







ep
  .open()

  .then(() => ep.readMetadata('hello.mp4', ['-File:all']))
  .then(console.log, console.error)
  .then(() => ep.close())
  .catch(console.error)



// const piexifjs = require("piexifjs");

// let filename1 = "my.jpg";

// let jpeg = fs.readFileSync(filename1);
// let data = jpeg.toString("binary");


// let exifObj = piexifjs.load(data);
// console.log(exifObj);




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
    ep
    .open()

    .then(() => ep.readMetadata('hello.mp4', ['-File:all']))
    
    .then( (data) => response.json(data) )

    .then(() => ep.close())
    .catch(console.error)

    // ffprobe('sample1.mp4', { path: ffprobeStatic.path }, function (err, info) {

    //     response.json(info);
    //   })

    // response.json({
    //     "name": "kaungMinKhant",
    //     "work": "SE"
    // });
}


app.listen(5000);
