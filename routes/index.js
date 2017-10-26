'use strict'
const express = require('express');
const router = express.Router();
const query = require('../db/query.js')
const auth = require('../passport.js')
const knex = require('../db/knex_config');

/* GET home page. */
// function Resorts()  {
//   return knex('resort_data')
// }
// router.get('/find-resort', function(req, res){
//
//
//     return knex.select( 'resort_name', 'overall').from('resort_data').then(function(result){
//
//
//         for(var i=0; i<result.length; i++)  {
//           var names = result[i].resort_name; //use req.params
//           var over = result[i].overall;
//           console.log(names +" - " + over)
//         }
//
//
//       res.render('find-resort')
//     });
//
//
//   });












router.get('/', function(req, res, next) {
  router.get('/all', function(req, res, next){
    knex('resort_data')
    .join('resort_details', 'resort_data.id', 'resort_details.resort_id').select()
    .then(function(resorts){
      res.render('index', {resorts: resorts})

    })
  })

});

router.get('/auth/google', auth.passport.authenticate('google', {
    scope: [
        'profile', 'email',
    ],
    accessType: 'offline',
    approvalPrompt: 'force'
}));

router.get('/auth/google/callback',
    auth.passport.authenticate('google', {
        successRedirect: '/welcome',
        failureRedirect: '/'
      }
    )
);

router.get('/welcome', auth.ensureAuthenticated,  function(req, res, next) {
  query.getAllUsersByIdAndGoogleProfileId(req.user.googleID)
  .then((userdata) => {
    res.render('welcome', {user: userdata})
  })
})


router.get('/ham', function(req, res, next)  {
  knex('resort_details').select()
  .then(function(resDets) {
    res.render('api', {resDets: resDets})
  })
})

router.get('/search', function(req, res, next) {
  res.render('resort-search')
})
// router.get('/resorts', function(req, res, next) {
//   res.render('resorts')
// })



module.exports = router;
