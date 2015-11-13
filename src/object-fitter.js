function objectFitter(maxSize, props, o) {
  var limit, properties, obj;

  // arguments could come in a different order
  // but we always will have a number, a list and an object
  var args = Array.prototype.slice.call(arguments, 0);

  (function argumentOrder() {
    args.some(function findLimit(arg) {
      if (typeof arg === 'number') {
        limit = arg;
        return true;
      }
    });

    args.some(function findProperties(arg) {
      if (Array.isArray(arg)) {
        properties = arg;
        return true;
      }
    });

    args.some(function findObject(arg) {
      if (typeof arg === 'object' &&
        !Array.isArray(arg)) {
        obj = arg;
        return true;
      }
    });

    if (!limit || !properties || !obj) {
      throw new Error('Expected max size, properties list and an object');
    }
  }());

  if (!properties.length) {
    throw new Error('Expected at least 1 property that can be eliminated ' +
      JSON.stringify(properties));
  }

  var result = JSON.parse(JSON.stringify(obj));
  return result;
}

module.exports = objectFitter;
