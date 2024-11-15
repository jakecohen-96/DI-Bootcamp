const express = require('express');
const router = express.Router();

// storing to-do items
let todos = [];

// Get all to-do items
router.get('/todos', (req, res) => {
    res.json(todos);
});

// Add new item to list
router.post('/todos', (req, res) => {
    const { task } = req.body;
    const newTodo = { id: todos.length + 1, task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update item by id
router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const todo = todos.find(t => t.id === parseInt(id));
    if (todo) {
        todo.task = task;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});

// Delete item by id
router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
        const deleted = todos.splice(index, 1);
        res.json(deleted[0]);
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});

module.exports = router;