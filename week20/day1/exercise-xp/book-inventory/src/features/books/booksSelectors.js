import { createSelector } from '@reduxjs/toolkit';

// Select all books from state
export const selectBooks = (state) => state.books.books;

// Create memoized selectors for genres
export const selectHorrorBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === "Science Fiction")
);