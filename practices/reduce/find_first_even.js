'use strict';

function find_first_even(collection) {
  for(let index in collection){
    if(collection[index] % 2 === 0)return collection[index];
  }
}

module.exports = find_first_even;

