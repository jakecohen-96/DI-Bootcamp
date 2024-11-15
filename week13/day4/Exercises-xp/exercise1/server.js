// Dependencies
const express = require('express');
const app = express();
const PORT = 3000;
const postRoutes = require('./routes/postRoutes');

// parsing
app.use(express.json());

// welcome message
app.get('/', (req, res) => {
    res.send('Welcome to blog api; use /posts for access to posts');
});

// using routes
app.use('/api', postRoutes);

// running
app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});