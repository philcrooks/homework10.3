var KingRat = require( '../king_rat' );
var assert = require ( 'assert' );

describe ( 'KingRat', function() {
  var kingRat;

  before(function(){
    kingRat = new KingRat(10);
  })

  it( 'has 10 rats', function() {
    assert.strictEqual(10, kingRat.herd.length)
  })
})