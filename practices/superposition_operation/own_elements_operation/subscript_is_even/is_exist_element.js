'use strict';
var is_exist_element = function(collection,element){
  let result =  [...collection.keys()].filter(index => index % 2 === 0)
    .map(index => collection[index]).find(num => num === element);
  return result === element;
};
module.exports = is_exist_element;
