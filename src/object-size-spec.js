var la = require('lazy-ass');
var check = require('check-more-types');

describe('object size', function () {
  var sizer = require('./object-size');

  it('is a function', function () {
    la(check.fn(sizer));
  });

  it('returns a number', function () {
    var size = sizer('foo');
    la(check.positiveNumber(size));
  });

  it('measures an object', function () {
    var size = sizer({ foo: 'bar' });
    la(size > 5, 'at least 5 chars', size);
  });

  it('measures an empty object', function () {
    var size = sizer({});
    la(size === 2, 'empty object has size', size);
  });

  it('measures an empty string', function () {
    var size = sizer('');
    la(size === 2, 'empty object has size',
      size, JSON.stringify(''));
  });
});
