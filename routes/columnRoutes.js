const express = require('express');
const router = express.Router();
const {
  getColumns,
  createColumns,
} = require('../controllers/columnController');

router.get('/', getColumns);
router.post('/', createColumns);

module.exports = router;
