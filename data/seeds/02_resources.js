exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "computers" },
    { name: "conference rooms" },
    { name: "microphones" },
    { name: "sanity" },
    { name: "mind control" },
    { name: "glitter" },
  ]);
};
