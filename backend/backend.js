



let express = require("express");
let app = express();


app.get("/home", fun);




function fun (request, response) {
    response.json({
        "name": "kaungMinKhant",
        "work": "SE"
    });
}


app.listen(5000);
