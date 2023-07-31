const express = require("express");
const router = express.Router();
const Todo = require("../models/Todos");

//Get all Todos route
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
//Create new Todo
router.post("/new", async (req, res) => {
  const newTodo = new Todo(
    //req.body //what the Vue app is sending

    {
      author: "Flanders",
      todo: "Go to Canada",
    }
  );
  const savedTodo = await newTodo.save(); // mongo save method
  res.json(savedTodo); // respond with json to our post endpoint
});
router.get("/get/:id", async (req, res) => {
  const t = await Todo.findById({ _id: req.params.id });

  res.json(t);
});
//Delete a todo by ID
router.delete("/delete/:id", async (req, res) => {
  const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id });

  res.json(tDelete);
});
//Update a todo by ID
router.put("/update/:id", async (req, res) => {
  const tUpdate = await Todo.updateOne({
    //{_id: req.params.id}, {$set:req.body}
    author: "FBart",
    todo: "Skating",
  });

  res.json(tUpdate);
});

module.exports = router;
