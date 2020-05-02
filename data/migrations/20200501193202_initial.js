exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull();
    // table.integer("task_id").notNull();
    // table.integer("resource_id").notNull();
    table.boolean("finished").defaultTo(0);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNull();
    // table.integer("project_id").notNull();
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").notNull();
    table.text("description").notNull();
    table.integer("project_id");
    table.boolean("finished").notNull().defaultTo(0);
  });

  await knex.schema.createTable("projects_tasks", (table) => {
    table.increments("id").notNull();
    table.integer("project_id").references("id").inTable("projects");
    table.integer("task_id").references("id").inTable("tasks");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects_tasks");
  await knex.schema.dropTableIfExists("projects");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
};
