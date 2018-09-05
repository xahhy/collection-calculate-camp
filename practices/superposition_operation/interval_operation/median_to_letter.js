'use strict';

function middle_number(collection) {
  let chainLength = collection.length;
  collection = collection.map(num => parseInt(num)).sort((a, b) => a - b);
  if (chainLength % 2 === 0) {
    return Math.ceil((parseFloat(collection[chainLength / 2 - 1]) + parseFloat(collection[chainLength / 2])) / 2);
  } else {
    return collection[parseInt(chainLength / 2)];
  }
}

function convert(num) {
  var result = [];
  while (num) {
    var t = num % 26;
    if (!t) {
      t = 26;
      --num;
    }
    result.push(String.fromCodePoint(t + 96));
    num = ~~(num / 26);
  }
  return result.reverse().join('');
}

function median_to_letter(collection) {
  return convert(middle_number(collection));
}

module.exports = median_to_letter;
