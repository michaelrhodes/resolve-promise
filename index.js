module.exports = function (promise, callback) {
  promise.then(success, error)

  function error (value) {
    callback(value || new Error('Promise rejected'))
  }

  function success (value) {
    callback(null, value)
  }
}
