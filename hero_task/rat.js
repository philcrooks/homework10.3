Rat.prototype = {
  touch: function(food) {
    food.poison(this.infectionStrength);
  },
  increaseStrength: function() {
    this.infectionStrength *= 1.5;
  }
}

function Rat (infectionStrength) {
  this.infectionStrength = infectionStrength;
}

module.exports = Rat;