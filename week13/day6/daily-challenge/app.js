const express = require('express');
const app = express();
const PORT = 3000;
const quizRouter = require('./routes/quiz');

// parsing to json
app.use(express.json());

// welcome message 
app.get('/', (req, res) => {
    res.send("Welcome to the trivia quiz game Start the game by navigating to /api/quiz/start."); // i always get lost and forget how to start
});

// using routes
app.use('/api', quizRouter);

app.listen(PORT, () => {
    console.log(`trivia running on http://localhost:${PORT}!!!!`);
});