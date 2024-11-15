const { users } = require("../models/usersData.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserByName = (req, res) => {
  const { name } = req.query;
  const user = users.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (!user) return res.sendStatus(404);
  res.json(user);
};

module.exports = {
  getAllUsers,
  getUserByName
};
