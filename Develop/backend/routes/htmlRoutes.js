
const path = require("path");
module.exports = function(app){


    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/notes", function(req, res) {
        //sends user to notes.html when they enter '/notes'/ in the searchbar
        console.log("Get /notes");
        res.sendFile(path.join(__dirname, "../../public/notes.html"));
    })
   
    //the wildcard character '*' will accept any user input that does NOT match a previously defined path
    //This helps send the user to the home page, in the event they misspell characters or phrases
    //and also prevents the user from just receiving an error on their page
    app.get("/", function(req, res) {
        //sends user to index.html if they dont enter any path or a path not previously defined
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    })

    app.get("*", function(req, res) {
        //sends user to index.html if they dont enter any path or a path not previously defined
        console.log("get *");
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    })

}