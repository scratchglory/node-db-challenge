exports.seed = async function (knex) {
  await knex("projects").insert([
    { name: "Big Plans", finished: true },
    { name: "Not You Favorite", finished: false },
    { name: "President Kumachos", finished: true },
  ]);
};
