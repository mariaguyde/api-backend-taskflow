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

const getColumnsUser = async (req, res) => {
  try {
    const columnsUser = await Column.find({user_id: req.params.user_id});
    res.json(columnsUser);
  } catch (err) {
    res.status(500).json({ message: err.message + " et la valeur du param userID est : "+ req.params.user_id });
  }
};

// POST - créer une tâche (title seulement)
const createColumns = async (req, res) => {
  try {
    const { title, user_id } = req.body;
    if (!title || !user_id) {
      return res.status(400).json({ message: 'title and user_id is required' });
    }

    const newColumn = new Column({ title , user_id});
    const savedColumn = await newColumn.save();
    res.status(201).json(savedColumn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE - supprimer une tâche par id
const deleteColumn = async (req, res) => {
  try {
    const column = await Column.findByIdAndDelete(req.params.id);
    if (!column) return res.status(404).json({ message: 'column not found' });
    res.json({ message: 'Column deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { getColumns,deleteColumn,getColumnsUser, createColumns };
