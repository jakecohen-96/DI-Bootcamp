const express = require("express");
const pool = require('./config/db');
const app = express();
const PORT = 3000;

// parsing JSON
app.use(express.json());

app.listen(PORT, () => {
    console.log((`Running on port: ${PORT}!!!`))
});

app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO blog_posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blog_posts');
    res.json(result.rows); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM blog_posts WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.json(result.rows[0]); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const result = await pool.query(
      'UPDATE blog_posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM blog_posts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.send('Post deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});