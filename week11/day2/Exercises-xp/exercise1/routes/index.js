const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello from the router!');
});

router.get('/goodbye', (req, res) => {
    res.send('Goodbye from the router!');
});

module.exports = router;