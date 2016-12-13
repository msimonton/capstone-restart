
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('username');
    table.string('first_name');
    table.string('last_name');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')

};
