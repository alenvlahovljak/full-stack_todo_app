const db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.jsonp(todos);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.showTodo = function(req, res){
    db.Todo.findById(req.params.id)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateTodo = function(req, res){
    console.log(req.body);
    db.Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.destroyTodo = function(req, res){
    db.Todo.findByIdAndRemove(req.params.id)
    .then(function(){
        res.json({message: "Deleted!"});
    }).catch(function(err){
        res.send(err);
    });
}

module.exports = exports;