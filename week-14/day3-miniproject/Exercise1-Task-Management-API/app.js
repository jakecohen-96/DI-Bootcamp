const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
});

app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!!!`));
