'use strict';

function get_integer_interval(number_a, number_b) {
  if (number_a > number_b) {
    let i = 0;
    return [...Array(number_a + 1)].map(_ => i++).reverse().filter(item => item >= number_b)
  } else {
    let i = 0;
    return [...Array(number_b + 1)].map(_ => i++).filter(item => item >= number_a)
  }
}

module.exports = get_integer_interval;

