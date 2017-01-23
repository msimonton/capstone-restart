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


// router.get('/all', function(req, res, next)  {
//   knex('resort_data').select('resort_name', 'id', 'api_path', 'overall')
//   .orderBy('resort_name', 'asc')
//   .then(function(resorts) {
//     res.render('resorts', {resorts:resorts})
//   })
// })


router.get('/all', function(req, res, next){
  knex('resort_data')
  .join('resort_details', 'resort_data.id', 'resort_details.resort_id').select()
  .then(function(resorts){
    res.render('resorts', {resorts: resorts})

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

router.get('/search-results/:id1/:id2/:id3/:id4', function (req, res, next) {
  knex('resort_data')
  .join('resort_details', 'resort_data.id', 'resort_details.resort_id').select()
  .then(function(searchResults) {
  var topResorts=[req.params.id1,
                  req.params.id2,
                  req.params.id3,
                  req.params.id4
                ]
                .map(function(id) {
                  return searchResults.find(function(resort)  {
                    return resort.id==id
                  })
                })

    res.render('search-results', {searchResults:topResorts})
  })
})

  router.post('/search-results', function (req, res, next) {
    query.Resorts()
    .then(function(searchResults) {
      var w=req.body
      var count=0
      var m = searchResults;
      for(var i=0;i<m.length;i++ ) {
        var n= m[i].beginner*w.beg
        +m[i].intermediate*w.int
        +m[i].advanced*w.adv
        +m[i].expert*w.exp
        +m[i].tree_skiing*w.trees
        +m[i].snow*w.snowQual
        +m[i].off_piste*w.piste
        +m[i].uncrowded*w.crowds
        +m[i].terrain_park*w.terr
        +m[i].family_friendly*w.fam
        +m[i].nightlife*w.night
        +m[i].skin_skiout*w.skiin
        +m[i].apres*w.apres
        +m[i].cost*w.cost
        m[i].overall=n
      }
      m.sort(function(a,b)  {
        return b.overall - a.overall
      })
      var nOne = m[0].id
      var nTwo = m[1].id
      var nThree = m[2].id
      var nFour = m[3].id
      res.send('/resorts/search-results/'+nOne+'/'+nTwo+'/'+nThree+'/'+nFour)
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
