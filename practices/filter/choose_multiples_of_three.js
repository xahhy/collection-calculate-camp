'use strict';

function choose_multiples_of_three(collection) {
  return collection ? collection.filter(num => num % 3 === 0) : null;
}

module.exports = choose_multiples_of_three;
