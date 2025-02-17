const express = require('express');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.use('/api', postRoutes);

// Error Handling Middleware
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));