const express = require('express');
const app = express();
const PORT = 3000;
const todoRouter = require('./routes/todo');

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', todoRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the to-do list api.');
});

app.listen(PORT, () => {
    console.log(`running on localhost:${PORT}`);
});