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
    // const newProj = await db("projects").where({ id });

    res.json(newProj);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
