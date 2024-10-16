const express = require("express");
const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  getUser,
} = require("../controllers/userControllers");
const router = express.Router();
// Define a GET route for retrieving users
router.get("/",getUsers);
router.post("/", createUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
