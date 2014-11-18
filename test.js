var test = require('tape')
var broken = require('./')

var Promise = require('promise')
var bluebird = require('bluebird')
var deferred = require('deferred')
var when = require('when')
var q = require('q')

var run = function(assert, resolved, rejected) {
  assert.plan(2)

  broken(rejected, function(error) {
    assert.ok(error.message === 'done', 'rejected promise produces an error')
  })

  broken(resolved, function(error, value) {
    assert.ok(!error && value === 'done', 'resolved promise returns no error')
  })
}

test('npm.im/promise', function(assert) {

  var resolved = new Promise(function(resolve, reject) {
    resolve('done')
  })

  var rejected = new Promise(function(resolve, reject) {
    reject(new Error('done'))
  })

  run(assert, resolved, rejected)
})
