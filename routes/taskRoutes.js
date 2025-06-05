const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  getTasksUser,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:user_id', getTasksUser);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

module.exports = router;
