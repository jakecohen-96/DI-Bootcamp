const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/question', gameController.getEmojiQuestion);
router.post('/answer', gameController.checkAnswer);
router.get('/score', gameController.getScore);

module.exports = router;