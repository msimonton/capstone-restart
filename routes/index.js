'use strict'
var express = require('express');
var router = express.Router();
var query = require('../db/query.js')
var auth = require('../passport.js')
var knex = require('../db/knex_config');

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
  res.render('index');
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

// router.get('/resorts', function(req, res, next) {
//   res.render('resorts')
// })

router.get('/api', function(req, res, next) {

})

module.exports = router;
