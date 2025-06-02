const Column = require('../models/Column');

// GET - récupérer toutes les tâches
const getColumns = async (req, res) => {
  try {
    const columns = await Column.find();
    res.json(columns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST - créer une tâche (title seulement)
const createColumns = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'title is required' });
    }

    const newColumn = new Column({ title });
    const savedColumn = await newColumn.save();
    res.status(201).json(savedColumn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getColumns, createColumns };
