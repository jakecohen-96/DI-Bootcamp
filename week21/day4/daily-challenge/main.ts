interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    public books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}

class DigitalLibrary extends Library {
    public readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.books.map(book => book.title);
    }
}

const digitalLibrary = new DigitalLibrary("https://digitallibrary.com");

digitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949,
    genre: "Dystopian",
});

digitalLibrary.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780060935467",
    publishedYear: 1960,
    genre: "Fiction",
});

const bookDetails = digitalLibrary.getBookDetails("9780451524935");
if (bookDetails) {
    console.log(`Details of the book:`, bookDetails);
} else {
    console.log("Book not found.");
}

console.log("List of book titles:", digitalLibrary.listBooks());