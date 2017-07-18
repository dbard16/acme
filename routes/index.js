'use strict'
var express = require('express');
var router = express.Router();
var db = require('../db.js');


router.get('/', function(req, res, next){

  res.render('index', {max: db.max()});

});

router.get('/products', function(req, res, next){
  var allProducts = db.list();
  res.render('products', {products: allProducts, showForm: true});

});

router.get('/product/:id', function(req, res, next){

  var prods = db.find(req.params.id*1);
  res.render('product', {product: prods});
});

router.delete('/product/:id', function(req, res, next){

  db.del(req.params.id*1);
  res.redirect('/products');
});

router.post('/products', function(req, res, next){
  db.add(req.body.product, req.body.rating);
  res.redirect('/products');
});

module.exports = router;
