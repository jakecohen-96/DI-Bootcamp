const searchTasksByKeyword = (tasks, keyword) => {
    return tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()));
};

const searchTasksByCategory = (tasks, category) => {
    return tasks.filter(task => task.category === category);
};

const searchTasksByBoth = (tasks, keyword, category) => {
    return tasks.filter(
        task =>
            task.description.toLowerCase().includes(keyword.toLowerCase()) &&
            task.category.toLowerCase() === category.toLowerCase()
    );
};

module.exports = {
    searchTasksByKeyword,
    searchTasksByCategory,
    searchTasksByBoth,
};