'use strict'
var express = require('express');
var router = express.Router();
var query = require('../db/query.js')
var auth = require('../passport.js')
var knex = require('../db/knex_config');
// var mainJS = require('../public/javascripts/main.js')






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


router.get('/all', function(req, res, next)  {
  knex('resort_data').select('resort_name', 'id', 'api_path')
  .orderBy('resort_name', 'asc')
  .then(function(resorts) {
    res.render('resorts', {resorts:resorts})
  })
})

// router.get('/single/:id', function(req, res, next){
//   var detRes = query.getDetailsByData(req.params.id)
//   var dataRes = query.resortById(req.params.id)
//   Promise.all([dataRes, detRes])
//   .then(function(data)  {
//     res.render('resort-single', {data:data})
//   })
//   .catch((err) => {
//   console.error('Error')
//   next(err)
// })
// })



router.get('/single/:id', function(req, res, next){
  knex('resort_data')
  .join('resort_details', 'resort_data.id', 'resort_details.resort_id').where({"resort_data.id":req.params.id}).first()
  .then(function(data){
    res.render('resort-single', {data: data})
  })
})

router.get('/ham', function(req, res, next)  {
  knex('resort_details').select()
  .then(function(resDets) {
    res.render('api', {resDets: resDets})
  })
    .catch((err) => {
    console.error('Error')
    next(err)
  })
})

router.get('/search-results', function (req, res, next) {
  query.getSearchValues()
  .then(function(searchResults) {

    res.render('search-results', {searchResults:searchResults})
  })
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
