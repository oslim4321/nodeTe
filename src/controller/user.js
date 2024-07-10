function sqiGreet(req, res) {
  res.send("Hello, SQI!");
}

function getAllUsers(req, res) {
  res.json([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]);
}

function createNewUser(req, res) {
  const user = req.body;
  res.json({ message: `User ${user.name} created` });
}

const updateUser = (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  res.json({ message: `User with id ${userId} updated` });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User with id ${userId} deleted` });
};

module.exports = {
  sqiGreet,
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
