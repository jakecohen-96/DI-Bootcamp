// In-memory "database" of books
let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// Controller functions
exports.getAllBooks = (req, res) => {
    res.json(books);
};

// GET ALL
exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

// GET BY ID
exports.createBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

// PUT (UPDATE BY ID)
exports.updateBook = (req, res) => {
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
};

// DELETE BY ID
exports.deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook[0]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};