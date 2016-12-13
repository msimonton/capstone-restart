var knex = require('./knex_config.js')

// var Users = function(){
//   return knex('users')
// };
//
// function Resorts() {
//   return knex('resort_data');
// }



module.exports = {

  getAllUsers : function(){
    return Users();
  },
  getAllUsersByIdAndGoogleProfileId : function(profile){
    return Users().where('googleID', profile.id).first()
  },

  // getAllResorts: function() {
  //   return Resorts();
  // }

}
