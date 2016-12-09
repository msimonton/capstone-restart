
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resort_data', function(table) {
  table.increments();
  table.string('resort_name');
  table.integer('beginner');
  table.integer('intermediate');
  table.integer('advanced');
  table.integer('off_piste');
  table.integer('tree_skiing');
  table.integer('expert');
  table.integer('extreme');
  table.integer('snow');
  table.integer('freshies');
  table.integer('uncrowded');
  table.integer('slackcountry');
  table.integer('lifts');
  table.integer('terrain_park');
  table.integer('family_friendly');
  table.integer('daytime_restaurants');
  table.integer('nighttime_restaurants');
  table.integer('nightlife');
  table.integer('skin_skiout');
  table.integer('cost');
  table.integer('apres');
  table.integer('powderhounds');
  table.integer('overall');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resort_data')


};
