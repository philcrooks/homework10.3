var Food = require( '../food' )
var assert = require ( 'assert' )

describe ( 'Food', function() {
  var food;

  beforeEach( function() {
    food = new Food( "chips", 10 );
  })

  // Food should have a name
  it( 'has a name', function() {
    assert.strictEqual( "chips", food.name )
  })

  // Food should have a replenishment value
  it( 'has a replenishment value', function() {
    assert.strictEqual( 10, food.healthValue )
  })

  // Rats should be able to touch food, if they do the food becomes poisonous.
  it( 'becomes poisonous', function() {
    food.poison(30);
    assert.strictEqual(-30, food.healthValue);
  })

})