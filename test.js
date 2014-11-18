var test = require('tape')
var broken = require('./')

var promise = require('promise')
var bluebird = require('bluebird')
var deferred = require('deferred')
var q = require('q')
var when = require('when')

test('npm.im/promise', function(assert) {
  standard(assert, promise) 
})

test('npm.im/bluebird', function(assert) {
  standard(assert, bluebird) 
})

test('npm.im/deferred', function(assert) {
  nonstandard(assert, deferred)
})

test('npm.im/q', function(assert) {
  nonstandard(assert, q.defer)
})

test('npm.im/when', function(assert) {
  var resolved = when.promise(function(resolve, reject) {
    resolve('done')
  })

  var rejected = when.promise(function(resolve, reject) {
    reject()
  })

  go(assert, resolved, rejected)
})

function nonstandard (assert, defer) {
  var resolved = defer()
  var rejected = defer()

  resolved.resolve('done')
  rejected.reject()

  go(assert, resolved.promise, rejected.promise)
}

function standard (assert, Promise) {
  var resolved = new Promise(function(resolve, reject) {
    resolve('done')
  })

  var rejected = new Promise(function(resolve, reject) {
    reject()
  })

  go(assert, resolved, rejected)
}

function go(assert, resolved, rejected) {
  assert.plan(2)

  broken(rejected, function(error, value) {
    assert.ok(error && !value, 'rejected')
  })

  broken(resolved, function(error, value) {
    assert.ok(!error && value === 'done', 'resolved')
  })
}
