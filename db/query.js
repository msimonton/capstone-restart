var knex = require('./knex_config.js')


var Users = function(){
  return knex('user')
};

function Resorts() {
  return knex('resort_data');
}
var resSearchValues = function(formVals)  {
  return knex('resort_data').select()
}

module.exports = {



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
