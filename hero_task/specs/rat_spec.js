var Hero = require( '../hero' );
var Food = require( '../food' );
var Rat = require( '../rat' );
var assert = require ( 'assert' );

describe ( 'Rat', function() {
  var rat;

  beforeEach( function() {
    rat = new Rat(30);
  })

  it( 'has infection strength', function() {
    assert.strictEqual(30, rat.infectionStrength);
  })

  it( 'can increase infection strength', function() {
    rat.increaseStrength();
    assert.strictEqual(45, rat.infectionStrength);
  } )

  it( 'can poison food', function() {
    var food = new Food( "chips", 10 );
    rat.touch(food);
    assert.strictEqual(-30, food.healthValue);
  } )

  it( 'can super-poison food', function() {
    var food = new Food( "chips", 10 );
    rat.increaseStrength();
    rat.touch(food);
    assert.strictEqual(-45, food.healthValue);
  } )


})