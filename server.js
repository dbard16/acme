const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const db = require('./db.js');
const routes = require('./routes');
var port = process.env.PORT || 3000;
var fs = require('fs');
var path = require('path');


nunjucks.configure('views', {nocache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static(__dirname + '/public'));

app.use('/', routes);


app.listen(port,function(){
  console.log('server listening');
})
//comment





