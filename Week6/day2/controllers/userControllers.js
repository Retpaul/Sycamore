exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Ret" },
    { id: 2, name: "Paul" },
  ]);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email };
  res.status(201).json({ message: "User created", user: newUser });
};
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  // Simulate updating the user
  res.json({
    message: `User ${userId} updated`,
    updatedUser: { id: userId, name, email },
  });
};
exports.getUser= (req, res) => {
  const userId = req.params.id;
  // Simulate fetching the user (e.g., from a database)
  res.json({ id: userId, name: "ret", email: "ret@example.com" });
};
exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  // Simulate deleting the user
  res.json({ message: `User ${userId} deleted` });
};
