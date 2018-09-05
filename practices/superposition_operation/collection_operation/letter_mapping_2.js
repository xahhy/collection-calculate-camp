'use strict';
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

function average_to_letter(collection) {
  return convert(Math.ceil(collection.reduce((sum, num)=>sum+=parseInt(num), 0) / collection.length));
}

module.exports = average_to_letter;

