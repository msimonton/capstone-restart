'use strict'


var knex = require('./knex_config.js')

// var resJoin = function()  {
//   knex('resort_data')
//   .join('resort_details', 'resort_data.id', 'resort_details.resort_id')
//   .select()
// }

var resDetByData = function(id){
  return knex('resort_details').where('resort_details.resort_id', id)
}



function resById(id){
  return knex('resort_data')
    .where("resort_data.id", id)
    .join('resort_details', 'resort_data.id', 'resort_details.resort_id')
    .select()
  }


var Users = function(){
  return knex('user')
};

function Resorts() {
  return knex.select(
    'beginner',
    'intermediate',
    'advanced',
    'expert',
    'tree_skiing',
    'snow',
    'off_piste',
    'uncrowded',
    'terrain_park',
    'family_friendly',
    'nightlife',
    'skin_skiout',
    'apres',
    'cost')
    .from('resort_data')
}
var resSearchValues = function(formVals)  {
  return knex('resort_data').select()
}

module.exports = {


  // resById :function resById(id){
  //   return knex('resort_data')
  //     .where("resort_data.id", id)
  //     .join('resort_details', 'resort_data.id', 'resort_details.resort_id')
  //     .select('*')
  //   },
  //
  //




  getDetailsByData: function()  {
    return resDetByData()
  },

  resortById: function()  {
    return resById()
  },


  getAllResData: function() {
    return resJoin()
  },


  Resorts: function () {
    return knex.select(
      'id',
      'beginner',
      'intermediate',
      'advanced',
      'expert',
      'tree_skiing',
      'snow',
      'off_piste',
      'uncrowded',
      'terrain_park',
      'family_friendly',
      'nightlife',
      'skin_skiout',
      'apres',
      'cost')
      .from('resort_data')
  },

  // plunc: knex.table('users').pluck('id').then(function(ids) { console.log(ids); });


  getAllResorts: function() {
    return Resorts();
  },

  getSearchValues : function()  {
    return resSearchValues();
  },

  getAllUsers : function(){
    return Users();
  },
  getAllUsersByIdAndGoogleProfileId : function(profile){
    console.log(profile)
    return Users().where('googleID', profile).first()
  },

  // getAllResorts: function() {
  //   return Resorts();
  // }

}
