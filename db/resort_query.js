'use strict'
var knex = require('./knex_config.js')


$(document).ready(function()  {
$('#resSearchForm').submit(function(event)  {
  event.preventDefault()


  var vals= {
   beg: parseInt($('#begInput').val()),
   int: parseInt($('#intInput').val()),
   adv: parseInt($('#advInput').val()),
   exp: parseInt($('#expInput').val()),
   trees: parseInt($('#treeInput').val()),
   piste:parseInt($('#pisteInput').val()),
   snowQual: parseInt($('#snowInput').val()),
   crowds: parseInt($('#crowdInput').val()),
   terr: parseInt($('#terrInput').val()),
   fam: parseInt($('#famInput').val()),
   night: parseInt($('#nightInput').val()),
   skiin: parseInt($('#skiinInput').val()),
   apres: parseInt($('#apresInput').val()),
   cost: parseInt($('#costInput').val())
 }
})
})
})
