const express = require('express');
const router = express.Router();
const taskControl = require('../controllers/taskControl'); 


router.get('/', taskControl.getAllTasks);
router.get('/:id', taskControl.getTaskById);
router.post('/', taskControl.createTask);
router.put('/:id', taskControl.updateTask);
router.delete('/:id', taskControl.deleteTask);

module.exports = router;