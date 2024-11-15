const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to get posts data
router.get('/posts', dataController.getPosts);

module.exports = router;