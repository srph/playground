module.exports = function groupBy(arr, fn) {
  var group = {};

  arr.map(function(v, k) {
    var index = fn(v, k);
    group[index] == null
      ? group[index] = [v]
      : group[index].push(v);
  });

  return group;
}