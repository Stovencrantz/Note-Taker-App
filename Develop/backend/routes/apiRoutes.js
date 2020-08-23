//brings in the data stored in our db.json file
var dbData = require("../db.json");

//exports all of the content within our anonymous function
module.exports = function(app) {

    //displays the note titles and notes contained in our db.json file as JSON data
    app.get("/api/notes", function(req, res){
        res.json(dbData);
    })
}