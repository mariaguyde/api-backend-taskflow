const express = require('express');
const router = express.Router();
const {
  getColumns,
  createColumns,
  getColumnsUser,
  deleteColumn
} = require('../controllers/columnController');

router.get('/', getColumns);
router.get('/:user_id', getColumnsUser);
router.post('/', createColumns);
router.delete('/:id', deleteColumn);

module.exports = router;
