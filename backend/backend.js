



let express = require("express");
let app = express();


app.get("/home", (request, response) => {
    response.json({"kaung": "SE"})
})


app.listen(8000)
