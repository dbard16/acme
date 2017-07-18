'use strict'
const _ = require('lodash');
var data = [];


function add(product, rating){
  // if(typeof (rating*1) !== 'number'){
  //   throw 'Please enter a number';
  // }

  var num = true;
  for (var i = 0; i < rating.length; i++){
    if(rating.charCodeAt(i) < 48 || rating.charCodeAt(i) > 57){
      num = false;
    }

  }

  if(!num){
    throw 'Please enter a number!';
  }
var id = Math.random.floor()*1000

  data.push({product: product, rating: rating, id:id });
  }




function list(){

  return _.cloneDeep(data);

}

function find(id){
  return data.filter(function(product){
    return product.id === id;
  })[0];
}

function del(id){
data = data.filter(function(prod){
  return prod.id !== id;
});
}


function max(){
  var max = 0;
  var maxName = '';
  for (var i =0; i<data.length; i++){
    if(data[i].rating*1 > max){
      max = data[i].rating*1;
      maxName = data[i].product;
    }
  }
  return maxName;
}
add('Test Product', 10);
add('Different Product', 50);
//aa



module.exports = {add: add, list:list, find:find, del:del, max:max};

