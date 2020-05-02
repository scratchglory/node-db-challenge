const express = require("express");
// helps secure express apps by setting various HTTP headers
const helmet = require("helmet");
const projectsRouter = require("./routers/projects");
// const resourcesRouter = require("./routers/resources")
// const tasksRouter = reuqire("./routers/tasks")
// const ptRouter = reuqire("./routers/projects-tasks")

const server = express();
const port = 7000;

server.use(helmet());
server.use(express.json());

server.use("/projects", projectsRouter);

server.use((req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "SERVER ERRORRR",
  });
});

server.listen(port, () => {
  console.log(`Server ON ${port}`);
});
