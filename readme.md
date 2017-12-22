# resolve-promise
resolve promises with plain old callbacks

[![Build status](https://travis-ci.org/michaelrhodes/resolve-promise.svg?branch=master)](https://travis-ci.org/michaelrhodes/resolve-promise)

## install

```sh
npm install michaelrhodes/resolve-promise#1.1.0
```

## use

```js
var resolve = require('resolve-promise')

// Resolve a single promise
resolve(ask('Some question'), function (err, val) {
  err ? console.error(err) : console.log(val)
})

// Or wrap a promise generator and resolve later
var deferred = resolve(ask)

deferred('Some question', function (err, val) {
  err ? console.error(err) : console.log(val)
})

function ask (q) {
  return new Promise(function (resolve, reject) {
    // Do some async stuff
    setTimeout(function () {
      Math.round(Math.random()) ?
        resolve('Q: ' + q + '\nA: Blah blah blah') :
         reject('Q: ' + q + '\nA: Psych!')
    })
  })
}
```

## obey

[MIT](http://opensource.org/licenses/MIT)
