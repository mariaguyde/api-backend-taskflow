const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Column', columnSchema);
