# broken-promise
broken-promise lets you handle promises with plain old callbacks.

[![Build status](https://travis-ci.org/michaelrhodes/broken-promise.png?branch=master)](https://travis-ci.org/michaelrhodes/broken-promise)

## install
```sh
$ npm install broken-promise
```

## usage
```js
var Promise = require('your-fav-promises-implemenation')
var broken = require('broken-promise')

var promise = new Promise(function(resolve, reject) {
  // Do some async-y stuff
  get('google.com', function(error, response) {
    error ? reject(error) : resolve(response)
  })
})

broken(promise, function(error, response) {
  if (error) throw error
  console.log(response)
})
```
