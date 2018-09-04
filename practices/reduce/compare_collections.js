'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.size !== collection_b.size) return false;
  for (let a of collection_a) {
    if (collection_b.indexOf(a) < 0) return false;
  }
  return true;
}

module.exports = compare_collections;


