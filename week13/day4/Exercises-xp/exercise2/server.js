const express = require('express');
const app = express();
const PORT = 5000;
const bookRoutes = require('./routes/bookRoutes');

//parsing
app.use(express.json());

// welcome message
app.get('/', (req, res) => {
    res.send("Welcome to the Book API! Use /books to manage the collection of books.");
});

//  using routes
app.use('/api', bookRoutes);

// running
app.listen(PORT, () => {
    console.log(`Book api server running on http://localhost:${PORT}`);
});