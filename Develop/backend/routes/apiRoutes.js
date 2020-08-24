//brings in the data stored in our db.json file
const dbData = require("../db.json");
const fs = require("fs");

//exports all of the content within our anonymous function
module.exports = function(app) {

    //displays the note titles and notes contained in our db.json file as JSON data
    app.get("/api/notes", function(req, res){
        res.json(dbData);
    })

    //respond to the clients POST request
    //serve the data they are parsing to our json file
    app.post("/api/notes", (req, res) => {
        console.log("RequestBody: ", req.body);
        console.log("dbData before push: ", dbData);
        dbData.push(req.body);
        console.log("dbData after push: ", dbData);

        dbData.forEach((obj, i) => {
            obj.id = i + 1;
        });
        fs.writeFile("./db.json", JSON.stringify(dbData), () => {
            res.json(dbData);
        });
    });


    app.delete("/api/notes/:id", (req, res) => {

        var targetObj = parseInt(req.params.id);
        console.log("db length: ", dbData.length);
  
        for(var i = 0; i < dbData.length; i++){
            //check that the id of the note the user wants to delete "targetObj"
            //matches the correct id in our total notes array "dbData[i]"
            console.log("Note id to delete: ", typeof(targetObj), targetObj);
            console.log("id from our array: ", typeof(dbData[0].id), dbData[i].id);

            if(dbData[i].id === targetObj) {

                dbData.splice(i, 1);
                console.log("array after splice: ", dbData);
                fs.writeFile("./db.json", JSON.stringify(dbData), () => {
                    res.json(dbData);
                });
            }
            else{
                "There were no matches, we may have an error";
            }
        }

    }); 


}
