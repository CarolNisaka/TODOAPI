const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
}, {
    timestamps: false
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;