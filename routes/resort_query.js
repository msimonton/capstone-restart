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

//
//
// function findResortByName(){
//   return knex('resort_data')
//     .where("resort_name", 'Vail')
//     .select(
//       'resort_name',
//       'beginner',
//       'intermediate',
//       'advanced',
//       'off_piste',
//       'tree_skiing',
//       'expert',
//       'extreme',
//       'snow',
//       'freshies',
//       'uncrowded',
//       'slackcountry',
//       'lifts',
//       'terrain_park',
//       'family_friendly',
//       'daytime_restaurants',
//       'nighttime_restaurants',
//       'nightlife',
//       'skin_skiout',
//       'cost',
//       'apres',
//       'powderhounds',
//       'overall'
//     )
//     .first()
//   }
//
//
//   router.get('/:resort_name', (req, res, next) => {
//     let resortData = findResortByName(req.params.resort_name)
//       .then((data) => {
//         res.render('resort-single', {
//           title: 'COSummit',
//           resort: JSON.stringify(data),
//           data:data
//         })
// })
// })




// function findResortByName(resortName){
//   return knex('resort_data')
//     .where('resort_name', resortName)
//     .select(
//       'resort_name',
//       'beginner',
//       'intermediate',
//       'advanced',
//       'off_piste',
//       'tree_skiing',
//       'expert',
//       'extreme',
//       'snow',
//       'freshies',
//       'uncrowded',
//       'slackcountry',
//       'lifts',
//       'terrain_park',
//       'family_friendly',
//       'daytime_restaurants',
//       'nighttime_restaurants',
//       'nightlife',
//       'skin_skiout',
//       'cost',
//       'apres',
//       'powderhounds',
//       'overall'
//     )
//     .first()
//   }
//
//
//   router.get('/:resort_name', (req, res, next) => {
//     let resData =findResortByName(req.params.resort_name)
//     Promise.all([resData])
//       .then((data) => {
//         res.render('resort-single', {
//           title: 'COSummit',
//           resort: JSON.stringify(data),
//           data:data
//         })
//
// })
// })
router.get('/all', function(req, res, next)  {
  knex('resort_data').select('resort_name', 'id', 'api_path')
  .orderBy('resort_name', 'asc')
  .then(function(resorts) {
    res.render('resorts', {resorts:resorts})
  })
})

router.get('/:id', function(req, res, next){
  knex('resort_data').where({id:req.params.id}).first()
  .then(function(data){
    res.render('resort-single', {data: data})
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
