const express = require('express');
const app = express();
const PORT = 3000;
const booksRouter = require('./routes/books');

// parsing to json
app.use(express.json());

// welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the books api.');
});

// using routes
app.use('/api', booksRouter);

app.listen(PORT, () => {
    console.log(`running on //localhost:${PORT}!!!!`);
});