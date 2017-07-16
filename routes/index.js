'use strict'
var express = require('express');
var router = express.Router();
var db = require('../db.js');


router.get('/', function(req, res, next){
  var products = db.list();
  res.render('index', {products: products});


});



module.exports = router;
