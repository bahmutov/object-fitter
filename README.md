# object-fitter

> Trims properties from an object until it fits into given size limit

[![NPM][object-fitter-icon] ][object-fitter-url]

[![Build status][object-fitter-ci-image] ][object-fitter-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

Install

    npm install --save object-fitter

Use

```js
var fitter = require('object-fitter');
var largeObject = {
  foo: '... sometimes long property value',
  bar: 42
};
var fittedObject = fitter(10, ['foo'], largeObject);
// property "foo" was removed to fit into 10 characters
// { bar: 42 }
```

The limit is for stringified representation of the object.

You can pass multiple properties to be eliminated one by one

```js
var fittedObject = fitter(10, ['foo', 'bar', ...], largeObject);
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/object-fitter/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[object-fitter-icon]: https://nodei.co/npm/object-fitter.png?downloads=true
[object-fitter-url]: https://npmjs.org/package/object-fitter
[object-fitter-ci-image]: https://travis-ci.org/bahmutov/object-fitter.png?branch=master
[object-fitter-ci-url]: https://travis-ci.org/bahmutov/object-fitter
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
