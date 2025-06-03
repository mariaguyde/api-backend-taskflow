const Task = require('../models/Task');

// GET - récupérer toutes les tâches
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getTasksUser = async (req, res) => {
  try {
    const { user_id } = req.body;
    const tasksUser = await Task.find({user_id: user_id});
    res.json(tasksUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST - créer une tâche (title seulement)
const createTask = async (req, res) => {
  try {
    const { task, column_id, user_id } = req.body;
    if (!task || !column_id || !user_id) {
      return res.status(400).json({ message: 'task (name, columnID, userID) is required' });
    }

    const newTask = new Task({ task, column_id, user_id });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT - modifier une tâche par _id
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE - supprimer une tâche par _id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getTasks, getTasksUser, createTask, updateTask, deleteTask };
