const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const todoRoutes = require("./routes/todo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
    //res.send() is dynamic depending on content
    //res.json() will do exact thing
    //res.send() will call res.json()
    //res.send({message: "Hi from Express.js"});
    //res.send("{data: Alen}") // - it's String for res.send()
    //res.json("{data: Alen}") // - it's a JSON for res.json()
    res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(PORT, function(){
    console.log("Server has started! ");
})