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
