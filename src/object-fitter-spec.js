var la = require('lazy-ass');
var check = require('check-more-types');
var sizer = require('./object-size');

describe('object fitter', function () {
  var fitter = require('./object-fitter');

  var testObject = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };
  var unimportantProperties = ['baz'];
  var testObjectSize = sizer(testObject);

  la(testObjectSize === 37, 'different object size', testObjectSize);

  it('is a function', function () {
    la(check.fn(fitter));
  });

  it('returns a new object', function () {
    var o = fitter(100, unimportantProperties, testObject);
    la(o !== testObject);
  });

  it('eliminates single less important property', function () {
    var o = fitter(35, unimportantProperties, testObject);
    la(o, 'got returned object', o);
    la(o.foo === 'foo', 'still has foo', o);
    la(o.bar === 'bar', 'still has bar', o);
    la(!o.baz, 'no longer has baz', o);
  });

  it('eliminates two properties', function () {
    var o = fitter(20, ['bar', 'baz'], testObject);
    la(o, 'got returned object', o);
    la(o.foo === 'foo', 'still has foo', o);
    la(!o.bar, 'no longer has bar', o);
    la(!o.baz, 'no longer has baz', o);
  });

  it('eliminates all properties', function () {
    var o = fitter(2, ['bar', 'baz', 'foo'], testObject);
    la(o, 'got returned object', o);
    la(!o.foo, 'no longer has foo', o);
    la(!o.bar, 'no longer has bar', o);
    la(!o.baz, 'no longer has baz', o);
  });

  describe('different argument order', function () {
    it('handles limit, properties, object', function () {
      var o = fitter(35, unimportantProperties, testObject);
      la(o, 'got returned object', o);
    });

    it('handles properties, limit, object', function () {
      var o = fitter(unimportantProperties, 35, testObject);
      la(o, 'got returned object', o);
    });

    it('handles object, properties, limit', function () {
      var o = fitter(testObject, unimportantProperties, 35);
      la(o, 'got returned object', o);
    });

    it('handles object, limit, properties', function () {
      var o = fitter(testObject, 35, unimportantProperties);
      la(o, 'got returned object', o);
    });
  });

});
