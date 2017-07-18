const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const db = require('./db.js');
const routes = require('./routes');
const path = require('path');
var port = process.env.PORT || 3000;
var fs = require('fs');

var bodyParser = require('body-parser');
app.use('/vendor', express.static(path.join((__dirname, 'node_modules'))));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('method-override')('_method'));

app.use('/', routes);

 app.use(function(err, req, res, next){
     res.render('error', {error: err});

});


app.listen(port,function(){
  console.log('server listening');
})
//commentaaaa





