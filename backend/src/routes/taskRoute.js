const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  allTask,
  addTask,
  completeTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();

router.get("/", authMiddleware, allTask);

router.post("/", authMiddleware, addTask);

router.patch("/:id", authMiddleware, completeTask);

router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
