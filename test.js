var tape = require('tape')
var resolve = require('./')

var promise = require('promise')
var bluebird = require('bluebird')
var deferred = require('deferred')
var when = require('when')
var q = require('q')

tape('npm.im/promise', function (t) {
  standard(t, promise)
})

tape('npm.im/bluebird', function (t) {
  standard(t, bluebird)
})

tape('npm.im/when', function (t) {
  standard(t, when.Promise)
})

tape('npm.im/deferred', function (t) {
  nonstandard(t, deferred)
})

tape('npm.im/q', function (t) {
  nonstandard(t, q.defer)
})

function nonstandard (t, defer) {
  var resolved = defer()
  var rejected = defer()

  resolved.resolve('done')
  rejected.reject()

  go(t, resolved.promise, rejected.promise)
}

function standard (t, Promise) {
  var resolved = new Promise(function (resolve, reject) {
    resolve('done')
  })

  var rejected = new Promise(function (resolve, reject) {
    reject()
  })

  go(t, resolved, rejected)
}

function go (t, resolved, rejected) {
  t.plan(2)

  resolve(rejected, function (error, value) {
    t.ok(error && !value, 'rejected')
  })

  resolve(resolved, function (error, value) {
    t.ok(!error && value === 'done', 'resolved')
  })
}
