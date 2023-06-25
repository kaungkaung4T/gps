



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


let livereload = require("livereload");
let connectLiveReload = require("connect-livereload");

let liveReloadServer = livereload.createServer();




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

        return response.json(data);
    }
}



app.post("/create", post);

function post (request, response) {

    let j_data = ep.open()
    
    let open = j_data.then(() => ep.readMetadata(request.body.name, ['-File:all']))
    
    let close = open.then( (data) => { 
        GPSLatitude = data['data'][0]['GPSLatitude']
        GPSLongitude = data['data'][0]['GPSLongitude']

        GPSLatitude = GPSLatitude.replace(' ', '')
        GPSLongitude = GPSLongitude.replace(' ', '')

        GPSLatitude = GPSLatitude.replace('deg', '°')
        GPSLongitude = GPSLongitude.replace('deg', '°')
        
        const sql = "INSERT INTO user (`name`, `latitude`, `longitude`) VALUES (?)";
        const values = [
            request.body.name,
            GPSLatitude,
            GPSLongitude,
        ]
    db.query(sql, [values], create_db);

    function create_db(error, data) {
        if (error) return response.json(error);
        return response.json(data);

    }
} )

    close.then(() => ep.close())
    .catch(console.error)
    return

}






app.get("/home", fun);

function fun (request, response) {


    let j_data = ep.open()
    
    let open = j_data.then(() => ep.readMetadata('hello.mp4', ['-File:all']))
    
    open.then( function f (data) { return data['data'][0]['GPSLatitude'] })
    

    response.json("ee")

    open.then(() => ep.close())
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
