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
function even_to_letter(collection) {
  return collection.filter(item=>item%2===0).map(item=>convert(item));
  //在这里写入代码
}

module.exports = even_to_letter;
