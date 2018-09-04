'use strict';

function find_last_even(collection) {
  return collection.filter(num=>num%2===0).reverse()[0];
}

module.exports = find_last_even;
