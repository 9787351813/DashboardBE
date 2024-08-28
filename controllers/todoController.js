const Todo = require('../models/Todo');

// Fetch all TODO items
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add a new TODO item
exports.addTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title });
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a TODO item
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a TODO item
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'TODO item deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
