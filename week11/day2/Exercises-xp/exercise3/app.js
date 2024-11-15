const express = require('express');
const app = express();
const PORT = 3000;
const booksRouter = require('./routes/books');

// parsing to json
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the books api.');
});



app.listen(PORT, () => {
    console.log(`running on //localhost:${PORT}!!!!`);
});