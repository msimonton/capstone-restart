var knex = require('./knex_config.js')

var Users = function(){
  return knex('user')
};

function Resorts() {
  return knex('resort_data');
}



module.exports = {

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
