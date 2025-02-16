import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        { id: 1, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
        { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
        { id: 3, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
        { id: 4, title: "Neuromancer", author: "William Gibson", genre: "Science Fiction" },
        { id: 5, title: "It", author: "Stephen King", genre: "Horror" },
        { id: 6, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" }
    ]
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {}
});

export default booksSlice.reducer;