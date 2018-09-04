'use strict';

var compute_elements_sum = require('../../practices/reduce/compute_sum.js');

ddescribe('compute_elements_sum', function() {

  var collection = [1, 2, 3, 4, 5];

  it('计算给定集合元素的总和', function() {
    var result = compute_elements_sum(collection);

    expect(result).toEqual(15);
  });
});
