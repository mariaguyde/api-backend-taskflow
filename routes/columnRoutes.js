const express = require('express');
const router = express.Router();
const {
  getColumns,
  createColumns,
} = require('../controllers/columnController');

router.get('/', getTasks);
router.post('/', createTask);

module.exports = router;
