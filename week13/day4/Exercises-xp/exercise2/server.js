const express = require('express');
const app = express();
const PORT = 3000;
const bookRoutes = require('./routes/bookRoutes');

//parsing
app.use(express.json());

// welcome message
app.get('/', (req, res) => {
    res.send("Welcome to book api. Use /books to manage the collection of books.");
});

//  using routes
app.use('/api', bookRoutes);

// running
app.listen(PORT, () => {
    console.log(`Book api server running on http://localhost:${PORT}`);
});