var slice = Array.prototype.slice

module.exports = resolve

function resolve (val, cb) {
  return typeof val.then == 'function' ?
    promise(val) :
    wrapped

  function wrapped () {
    var args = arguments
    var last = args.length - 1

    typeof args[last] == 'function' ?
      (xargs = slice.call(args, 0, -1), cb = args[last]) :
      (xargs = args)

    resolve(val.apply(null, xargs))
  }

  function promise (val) {
    if (typeof cb == 'function') val.then(
      function (v) { cb(null, v) },
      function (v) { cb(v || new Error) }
    )
  }
}
