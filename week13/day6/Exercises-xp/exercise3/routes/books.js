const express = require('express');
const router = express.Router();

// storing
let books = [];

// Get all books
router.get('/books', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by id
router.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id === parseInt(id));
    if (book) {
        book.title = title;
        book.author = author;
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Delete a book by id
router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        const deleted = books.splice(index, 1);
        res.json(deleted[0]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

module.exports = router;