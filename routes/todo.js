const express = require("express");
const router = express.Router();
const helpers = require("../helpers/todo");

router.route("/")
.get(helpers.getTodos)
.post(helpers.createTodo);

router.route("/:id")
    .get(helpers.showTodo)
    .put(helpers.updateTodo)
    .delete(helpers.destroyTodo);

module.exports = router;