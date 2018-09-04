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
function get_letter_interval(number_a, number_b) {
  let i=0
  if(number_a > number_b){
    return [...Array(number_a+1)].map(_=>i++).reverse().filter(num=>num>=number_b).map(num=>convert(num));
  }else {
    return [...Array(number_b+1)].map(_=>i++).filter(num=>num>=number_a).map(num=>convert(num));
  }
}

module.exports = get_letter_interval;
