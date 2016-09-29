# node-timezone [![Build Status][build]](https://circleci.com/gh/bcherny/node-timezone) [![npm]](https://www.npmjs.com/package/node-timezone) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/bcherny/node-timezone.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/node-timezone.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/node-timezone.svg?style=flat-square

> Get the server's timezone

## Install

```sh
npm install --save node-timezone
```

## Usage

```js
var getTimezone = require('node-timezone').getTimezone
console.log(getTimezone()) // "America/Los_Angeles"
```

## Tests

```sh
npm test
```

Tested on OSX and Ubuntu.
TODO: Test on Windows.