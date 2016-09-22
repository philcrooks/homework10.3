Rat = require( './rat' );

KingRat.prototype = {
  mutate: function() {
    for (var i = 0; i < this.herd.length; i++) {
      if (Math.random() > 0.5) this.herd[i].increaseStrength();
    }
  },
  choose: function() {
    return this.herd[Math.ceil(Math.random() * this.herd.length)];
  }
}

function KingRat(size) {
  this.herd = new Array(size);
  for (var i = 0; i < size; i++) {
    this.herd[i] = new Rat(7);
  }
  for (var c = 0; c < 4; c++) {
    this.mutate();
  }
}

module.exports = KingRat;