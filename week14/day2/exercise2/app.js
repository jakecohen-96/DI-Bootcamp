const express = require('express');
const pool = require('./config/db');
const app = express();
const PORT = 5000;

// Parsing to JSON file
app.use(express.json());

// POST
app.post('/books', async (req, res) => {
    const { title, author, published_year } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
            [title, author, published_year]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// GET
app.get('/books', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


// Get a Single Book by ID
app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Book not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// UPDATE
app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, published_year } = req.body;
    try {
        const result = await pool.query(
            'UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *',
            [title, author, published_year, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Book not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// DELETE 
app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Book not found');
        }
        res.send('Book deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// START
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });