var tiles = 'xyzw';

var tileNumbers = [1,2,3,4,5,6];

function pos2key(pos) {
  var tileX = Math.floor(pos / tileNumbers.length);
  var tileNumber = pos % tileNumbers.length;

  return tiles[tileX] + tileNumbers[tileNumber];
};

function key2pos(key) {
  var tileX = tiles.indexOf(key[0]);
  var tileNumber = key[1];

  return tileX * 6 + tileNumber;
};

var allPos = (function() {
  var ps = [];

  for (var i = 0; i < 24; i++)
    ps.push(i);
  return ps;
})();

var allKeys = allPos.map(pos2key);

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
  allKeys,
  pos2key,
  key2pos,
  memo,
  requestAnimationFrame: (window.requestAnimationFrame || window.setTimeout).bind(window)
};
