var Hero = require( '../hero' );
var Food = require( '../food' );
var Rat = require( '../rat' );
var assert = require ( 'assert' );

describe ( 'Hero', function() {
  var hero;

  beforeEach(function() {
    hero = new Hero("Alf", 100, "fish and chips");
  })

  // A Hero has a name
  it( 'has a name', function() {
    assert.strictEqual("Alf", hero.name );
  })

  // A Hero has health
  it ( 'has health', function () {
    assert.strictEqual( 100, hero.health );
  })

  // A Hero has a favourite food
  it ( 'has a favourite food', function() {
    assert.strictEqual( "fish and chips", hero.favouriteFood );
  })

  // A Hero can talk saying their name
  it ( 'can say their name', function() {
    assert.strictEqual( "Alf", hero.talk() );
  })

  // A hero should be able to eat food, and health should go up by the replenishment value
  it( 'can eat food', function() {
    var food = new Food( "chips", 10 );
    hero.eat(food);
    assert.strictEqual(110, hero.health);
  })

  // If the food is their favourite food, their health should go up by 1.5 * value.
  it ( 'can eat favourite food', function() {
    var food = new Food( "fish and chips", 20 );
    hero.eat(food);
    assert.strictEqual(130, hero.health);
  })

  // Heroes that eat poisonous food should lose health.
  it ( 'loses health', function() {
    var food = new Food( "fish and chips", 20 );
    var rat = new Rat(20);
    rat.touch(food);
    hero.eat(food);
    assert.strictEqual(80, hero.health);
  })

  it ( 'is alive', function() {
    assert.strictEqual(false, hero.isDead());
  })

  it ( 'can die', function() {
    var food = new Food( "fish and chips", 20 );
    var rat = new Rat(100);
    rat.touch(food);
    hero.eat(food);
    assert.strictEqual(0, hero.health);
    assert.strictEqual(true, hero.isDead());
    assert.strictEqual("Alf has passed on (says a ghostly voice)", hero.talk());
  })
})