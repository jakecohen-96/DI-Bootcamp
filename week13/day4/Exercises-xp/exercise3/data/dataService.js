const axios = require('axios');

// Function to fetch posts data from JSONPlaceholder API
async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts data');
    }
}

module.exports = { fetchPosts };