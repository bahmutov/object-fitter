var la = require('lazy-ass');
var check = require('check-more-types');

describe('object fitter', function () {
  var fitter = require('./object-fitter');

  var testObject = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };

  it('is a function', function () {
    la(check.fn(fitter));
  });

  it('returns a new object', function () {
    var o = fitter(100, ['foo'], testObject);
    la(o !== testObject);
  });

});
