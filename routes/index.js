'use strict'
var express = require('express');
var router = express.Router();
var query = require('../db/query.js')
var auth = require('../passport.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COSummit' });
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

router.get('/resorts', function(req, res, next) {
  res.render('resorts')
})

router.get('/api', function(req, res, next) {
  
})

module.exports = router;
