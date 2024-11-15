const express = require('express');
const app = express();
const PORT = 3000;

const gameRoutes = require('./routes/gameRoutes');

app.use(express.json());
app.use(express.static('public'));

// Welcome message
app.get('/', (req, res) => {
    res.send("Welcome to the emoji guessing game. Visit /question to start the game.");
});

// using routes
app.use('/api', gameRoutes);

//running
app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});