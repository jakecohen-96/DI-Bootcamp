import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/books/booksSelectors';

const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState("All");

    // Use selectors based on genre
    const allBooks = useSelector(selectBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const sciFiBooks = useSelector(selectScienceFictionBooks);

    const getFilteredBooks = () => {
        switch (selectedGenre) {
            case "Horror":
                return horrorBooks;
            case "Fantasy":
                return fantasyBooks;
            case "Science Fiction":
                return sciFiBooks;
            default:
                return allBooks;
        }
    };

    return (
        <div>
            <h2>Book Inventory</h2>
            
            <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
                <option value="All">All Genres</option>
                <option value="Horror">Horror</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
            </select>

            <ul>
                {getFilteredBooks().map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author} ({book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;