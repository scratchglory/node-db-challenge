exports.seed = async function (knex) {
  await knex("tasks").insert([
    { description: "doing the right thing", project_id: 1, finished: true },
    { description: "planting stuff", project_id: 1, finished: true },
    { description: "nap on it", project_id: 2, finished: false },
    { description: "tasking tasks", project_id: 2, finished: true },
    { description: "get half way there", project_id: 2, finished: false },
    { description: "Final BLOW", project_id: 3, finished: true },
  ]);
};
