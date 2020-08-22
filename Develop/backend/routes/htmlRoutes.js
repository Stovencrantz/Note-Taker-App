
const path = require("path");
module.exports = function(app){


    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/notes", function(req, res) {
        //sends user to notes.html
        res.sendFile(path.join(__dirname, "../../public/notes.html"));
    })
   
    app.get("*", function(req, res) {
        //sends user to index.html
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    })

}