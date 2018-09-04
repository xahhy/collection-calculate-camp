'use strict';

function choose_even(collection) {
  return collection ? collection.filter(num => num % 2 === 0) : null;
}

module.exports = choose_even;
