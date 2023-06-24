



let express = require("express");
let app = express();


app.get("/", fun);




function fun (request, response) {
    response.json({"kaung": "SE"});
}


app.listen(8000);
