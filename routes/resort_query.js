'use strict'
var express = require('express');
var router = express.Router();
var query = require('../db/query.js')
var auth = require('../passport.js')
var knex = require('../db/knex_config');



router.get('/find-resort', function(req, res, next) {
  return knex.select( 'resort_name', 'overall').from('resort_data').then(function(result){


        for(var i=0; i<result.length; i++)  {
          var names = result[i].resort_name; //use req.params
          var over = result[i].overall;
          console.log(names +" - " + over)
        }


      res.render('find-resort')
    });
})









/* GET home page. */
// router.get('/find-resort', function(req, res){
//
// query.findAllResorts().select('resort_name').then(function(result){
//   res.json(result);
//   // console.log(result)
//   });
// });

module.exports = router;
