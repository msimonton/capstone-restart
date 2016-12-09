'use strict'
var express = require('express');
var router = express.Router();
var query = require('../db/query.js')
var auth = require('../passport.js')

/* GET home page. */
// router.get('/find-resort', function(req, res){
//
// query.findAllResorts().select('resort_name').then(function(result){
//   res.json(result);
//   // console.log(result)
//   });
// });

module.exports = router;
