const express = require("express");
const db = require("../data/config");
const router = express.Router();

// '/projects'
router.get("/", async (req, res, next) => {
  try {
    res.json(await db("projects"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const projData = req.body;
    const newProj = await db("projects").insert(projData);

    res.json(newProj);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/tasks", async (req, res, next) => {
  try {
    const projTasks = await db("projects_tasks as pt")
      .join("projects", "projects.id", "pt.project_id")
      .join("tasks", "tasks.id", "pt.task_id")
      .where("pt.project_id", req.params.id)
      .select("tasks.id", "tasks.description");
    res.json(projTasks);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/resources", async (req, res, next) => {
  try {
    const projResources = await db("projects_resources as pr")
      .join("projects", "projects.id", "pr.project_id")
      .join("resources", "resources.id", "pr.resource_id")
      .where("pr.project_id", req.params.id)
      .select("resources.id", "resources.name");
    res.json(projResources);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
