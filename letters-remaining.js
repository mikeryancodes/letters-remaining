var boardTiles = $('.tilePlayedKey, .tileLastPlayedKey');

var tiles = {
  a: 8, b: 2, c: 2, d: 3, e: 11,
  f: 2, g: 2, h: 2, i: 8, j: 1,
  k: 1, l: 3, m: 2, n: 5, o: 7,
  p: 2, q: 1, r: 5, s: 3, t: 5,
  u: 3, v: 2, w: 2, x: 1, y: 3,
  z: 1, '?': 2,
};

var usedTiles = {};
Object.keys(tiles).forEach(function(k){ usedTiles[k] = 0;});

for (var i = 0; i < boardTiles.length; i++) {
  var t = boardTiles[i];
  var s = $(t)[0].firstChild;
  var char = $(s).text().toLowerCase();
  if ($(t).find('.tileValue').length) {
    usedTiles[char] += 1;
    continue;
  }
  usedTiles['?'] += 1;
}

var rackTiles = $('.tileRackKey');
for(var i = 0; i < rackTiles.length; i++) {
  var t = rackTiles[i];
  var valStringObj = $(t).find('.tileValue')[0].firstChild;
  var value = $(valStringObj).text();
  if (value === ' ') {
    usedTiles['?'] += 1;
    continue;
  };
  var s = $(t)[0].firstChild;
  var char = $(s).text().toLowerCase();
  usedTiles[char] += 1;
}

var tilesLeft = {};

Object.keys(tiles).forEach(function(t){
  var diff = tiles[t] - usedTiles[t];
  if (diff > 0) {
    tilesLeft[t] = diff;
  }
});

console.log('Tiles Remaining: ', tilesLeft);
