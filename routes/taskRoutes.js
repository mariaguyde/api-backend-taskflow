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
//router.put('/:id', updateTask);
//router.delete('/:id', deleteTask);

module.exports = router;
