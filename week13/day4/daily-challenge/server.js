const express = require('express');
const app = express();
const PORT = 3000;
const gameRoutes = require('./routes/gameRoutes');

app.use(express.json());

// Welcome message
app.get('/', (req, res) => {
    res.send("Welcome to the Emoji Guessing Game! Visit /api/question to start the game.");
});

// Serve static files from the 'public' folder
app.use(express.static('public'));


app.use('/api', gameRoutes); // This should mount the /api route correctly

//running
app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});