Food.prototype = {
  poison: function(strength) {
    this.healthValue = -strength;
  }
}

function Food ( name, healthValue ) {
  this.name = name;
  this.healthValue = healthValue;
}

module.exports = Food;