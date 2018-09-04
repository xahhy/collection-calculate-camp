'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(itemA=> collection_b.filter(itemB => itemA % itemB === 0).length > 0)
}

module.exports = choose_divisible_integer;
