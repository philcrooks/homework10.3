Hero.prototype = {
  talk: function() {
    if (this.isDead())
      return this.name + " has passed on (says a ghostly voice)";
    else
      return this.name;
  },
  eat: function(food) {
    if (!this.isDead()) {
      var multiplier = 1;
      if ((food.name === this.favouriteFood) && (food.healthValue > 0)) multiplier = 1.5
      this.health += food.healthValue * multiplier;
    }
  },
  isDead: function() {
    return (this.health <= 0);
  }
}

function Hero ( name, health, favouriteFood ) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

module.exports = Hero;