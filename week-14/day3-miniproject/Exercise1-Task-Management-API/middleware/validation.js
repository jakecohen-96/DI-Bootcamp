module.exports.validateTask = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }  if (typeof title !== 'string' || typeof content !== 'string') {
        return res.status(400).json({error: 'Title and content must be in string form'});
    }
    next();
};

module.exports = validateTask;