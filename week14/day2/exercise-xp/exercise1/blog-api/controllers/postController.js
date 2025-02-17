const Post = require('../models/postModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.updatePost(req.params.id, title, content);
    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.deletePost(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };