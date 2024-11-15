const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/index');


app.get('/', (req, res) => {
    res.send('Welcome to expressss!');
});

app.use('/', router);

app.listen(PORT, () => {
   console.log(`running on localhost:${PORT}!!!`);
});