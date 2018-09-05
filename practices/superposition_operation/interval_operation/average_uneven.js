'use strict';

function average_uneven(collection) {
  let odd = collection.filter(num => num % 2 === 1);
  return odd.reduce((sum, num) => sum += num, 0) / odd.length;
}

module.exports = average_uneven;
