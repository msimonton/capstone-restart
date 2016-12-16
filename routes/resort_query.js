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

router.get('/single/:id', function(req, res, next){
  knex('resort_data').where({id:req.params.id}).first()
  .then(function(data){
    res.render('resort-single', {data: data})
  })
})

router.get('/ham', function(req, res, next)  {
  knex('resort_details').select()
  .then(function(resDets) {
    res.render('api', {resDets: resDets})
  })
})


// router.post('/search-results/test', function(req, res) {
//
//     var data = req.body;
//     var id = data.id;
//     console.log(data)
// })

router.get('/search-results', function (req, res, next) {
  query.Resorts()
  .then(function(searchResults) {
    var count=0
    var large= []
    var m = searchResults;
    for(var i=0;i<m.length;i++ ) {
      var n= m[i].beginner*2 +m[i].intermediate+m[i].advanced+m[i].expert+m[i].tree_skiing
      +m[i].snow+m[i].off_piste+m[i].uncrowded+m[i].terrain_park+m[i].family_friendly+m[i].nightlife+m[i].skin_skiout+m[i].apres+m[i].cost


      console.log(n)



  //     large.push(n)
  //     large.sort(function(a, b) {
  // return a - b;
// });


    }


    res.render('search-results', {searchResults:searchResults})
  })
})



// router.get('/search-results', function (req, res, next) {
//   query.Resorts()
//   .then(function(searchResults) {
//     for(var i =0; i<searchResults.length;i++) {
//       console.log(searchResults[i] )
//     }
//



//
// router.post('/id', function(req, res) {
//
//     var data = req.body;
//     var id = data.id;
//
//     var query = knex('resort_data').select().where({id:id})
//     .then(query, function(error, result) {
//         console.log(result);
//         res.send(result);
//     });
//
// });






/* GET home page. */
// router.get('/find-resort', function(req, res){
//
// query.findAllResorts().select('resort_name').then(function(result){
//   res.json(result);
//   // console.log(result)
//   });
// });

module.exports = router;
