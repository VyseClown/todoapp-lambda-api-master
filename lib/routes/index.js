//routes with express, just like I use in the rocketseat course!
const express = require("express");
const router = express.Router();
const todos = require("../controllers/todos.controller");

router.use("/todos", todos);
module.exports = router;
