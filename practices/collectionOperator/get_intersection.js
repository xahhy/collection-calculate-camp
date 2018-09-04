'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(itemB=>collection_a.indexOf(itemB) > -1)
}

module.exports = get_intersection;
