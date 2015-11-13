function objectSize(o) {
  var str = JSON.stringify(o);
  return str.length;
}

module.exports = objectSize;
