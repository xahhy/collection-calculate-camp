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

function get_letter_interval_2(number_a, number_b) {
  let direction = number_a > number_b;
  let max = direction ? number_a : number_b;
  let min = direction ? number_b : number_a;
  let i = 0;
  if (direction) {
    return [...Array(max + 1)].map(_ => i++).reverse().filter(num=>num>=min).map(number=>convert(number));
  }else{
    return [...Array(max + 1)].map(_ => i++).filter(num=>num>=min).map(number=>convert(number));
  }
}

module.exports = get_letter_interval_2;

