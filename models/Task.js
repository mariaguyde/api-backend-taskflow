const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  column_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
