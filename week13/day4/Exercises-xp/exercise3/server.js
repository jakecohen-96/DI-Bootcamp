const express = require('express');
const app = express();
const PORT = 3000;

const dataRoutes = require('./routes/dataRoutes');

app.use(express.json());

// Welcome message
app.get('/', (req, res) => {
    res.send("Welcome to  axios api Use /api/posts to get data.");
});

// using routes
app.use('/api', dataRoutes);

// runnung
app.listen(PORT, () => {
    console.log(`axios running on http://localhost:${PORT}`);
});