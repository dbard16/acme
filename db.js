'use strict'
const _ = require('lodash');
var data = [];


function add(product, rating){
  data.push({product: product, rating: rating});
}

function list(){

  return _.cloneDeep(data);

}
add('Test Product', 10);


module.exports = {add: add, list:list};

