const express = require("express");
const db = require("../data/config");
const router = express.Router();

// '/resources'
router.get("/", async (req, res, next) => {
  try {
    res.json(await db("resources"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resourceData = req.body;
    const newResource = await db("resources").insert(resourceData);

    res.json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
