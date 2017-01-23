
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resort_details', function(table)  {
    table.increments('id').primary();
    table.text('image');
    table.text('about');
    table.text('location');
    table.string('airports');
    table.string('hours');
    table.integer('acres');
    table.integer('num_trails');
    table.integer('num_lifts');
    table.integer('base_elevation');
    table.integer('summit_elevation');
    table.integer('verticle_rise');
    table.integer('annual_snowfall');
    table.integer('num_terrain_parks');
    table.string('cat_ski');
    table.string('night_ski');
    table.string('cross_ski');
    table.string('terrain');
    table.integer('resort_id')
  .references('resort_data.id')
  .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resort_details')

};
