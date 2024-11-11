const express = require("express");
const pool = require('./config/db');
const app = express();
const PORT = 3000;

// parsing JSON
app.use(express.json());

app.get('/posts', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM blog_posts');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

app.listen(PORT, () => {
    console.log((`Running on port: ${PORT}!!!`))
});
