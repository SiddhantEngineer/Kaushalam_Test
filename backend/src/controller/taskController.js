const Task = require("../model/Task");

const allTask = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error at : " + err);
  }
};
const addTask = async (req, res) => {
  const { text } = req.body;
  try {
    const task = new Task({
      text: text,
      userId: req.user.userId,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error at : " + err);
  }
};
const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error at : " + err);
  }
};
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.remove();
    res.json({ message: "Task Removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error at : " + err);
  }
};

module.exports = {
  allTask,
  addTask,
  completeTask,
  deleteTask,
};
