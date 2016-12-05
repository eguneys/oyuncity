function memo(f) {
  var v, ret = function() {
    if (v === undefined) v = f();
    return v;
  };

  ret.clear = function() {
    v = undefined;
  };
  return ret;
}

module.exports = {
  memo,
  requestAnimationFrame: (window.requestAnimationFrame || window.setTimeout).bind(window)
};
