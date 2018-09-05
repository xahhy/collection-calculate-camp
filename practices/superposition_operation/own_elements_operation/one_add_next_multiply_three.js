'use strict';

function one_add_next_multiply_three(collection) {
  let sliceArray = [];
  for (let i = 0; i < collection.length - 1; i++) {
    sliceArray.push(collection.slice(i, i + 2))
  }
  return sliceArray.map(slice => slice.reduce((sum, num) => sum += num, 0) * 3);
}

module.exports = one_add_next_multiply_three;
