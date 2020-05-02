Project 1:_ tasks
task 1:1 project
project 1:_ resources - (examples: comp., conf room, mics, delivery)
resource 1:\* projects

1. npm init -y to create package.json
2. npm install knex sqlite3 express
3. knex init to create knexfile.js
   - useNullAsDefault: true
   - change connect filename path
   - seeds and migrations
4. create data folder
   - create config.js for knex
5. knex migrations in data folder, knex migrate:make
   - createTables
   - dropTableIfExists
   - knex migrate:latest :: knex migrate:rollback
6. Create seed folder in data folder
   - knex seed:make [filename]
7. knex seed:run
