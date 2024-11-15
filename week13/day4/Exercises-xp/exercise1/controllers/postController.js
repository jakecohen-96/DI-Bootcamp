// example database 
let posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." }
];


// Controller functions
exports.getAllPosts = (req, res) => {
    res.json(posts);
};


// GET
exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};


// POST
exports.createPost = (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
};


// PUT
exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = posts.find(p => p.id === parseInt(id));
    if (post) {
        post.title = title;
        post.content = content;
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

// DELETE
exports.deletePost = (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        const deletedPost = posts.splice(index, 1);
        res.json(deletedPost[0]);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};