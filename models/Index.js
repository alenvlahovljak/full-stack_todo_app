const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost:27017/todo-api", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//Don't need to add this, mongoose have already built-in Promise
//Use only if you want to add own Promise library
//mongoose.Promise = Promise;

module.exports.Todo = require("./Todo");