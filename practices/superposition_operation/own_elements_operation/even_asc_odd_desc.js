'use strict';
function even(collection) {
  return collection.filter(num=>num%2===0);
}
function odd(collection) {
  return collection.filter(num=>num%2===1);
}
var even_asc_odd_desc = function(collection){
  return even(collection).sort((a,b)=>a-b).concat(odd(collection).sort((a,b)=>b-a));
};
module.exports = even_asc_odd_desc;
