const express = require("express");
const db = require("../data/config");
const router = express.Router();

// '/tasks'
router.get("/", async (req, res, next) => {
  try {
    res.json(await db("tasks"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const taskData = req.body;
    const newTask = await db("tasks").insert(taskData);

    res.json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
