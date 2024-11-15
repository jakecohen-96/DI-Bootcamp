const express = require('express');
const router = express.Router();
const taskControl = require('../controllers/taskControl'); 
const { validateTask } = require('../middleware/validation');


router.get('/', taskControl.getAllTasks);
router.get('/:id', taskControl.getTaskById);
router.post('/', validateTask, taskControl.createTask);
router.put('/:id', validateTask, taskControl.updateTask);
router.delete('/:id', taskControl.deleteTask);


module.exports = router;