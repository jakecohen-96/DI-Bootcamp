const dataService = require('../data/dataService');

// Controller function to get posts from the data service
exports.getPosts = async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};