# broken-promise
broken-promise lets you handle promises with plain old callbacks.

[![Build status](https://travis-ci.org/michaelrhodes/broken-promise.png?branch=master)](https://travis-ci.org/michaelrhodes/broken-promise)

## install
```sh
$ npm install broken-promise
```

## usage
```js
var Promise = require('promise')
var broken = require('./')

var promise = new Promise(function(resolve, reject) {
  // Do some async-y stuff
  setTimeout(function() {
    Math.round(Math.random()) ?
      resolve('OK') :
      reject('NOT OK')
  }, 100)
})

broken(promise, function(error, value) {
  error ? console.error(error) : console.log(value)
})
```
