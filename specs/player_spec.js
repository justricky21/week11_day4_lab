const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js')

describe('Player', function(){
  let player;
  beforeEach(function(){
    player = new Player("Ricardo the Great");
  })

  it('should have a name', function(){
    const actual = player.name;
    const expected = "Ricardo the Great";
    assert.strictEqual(actual, expected);
  })

  describe('Player\'s hand', function(){
    let card;
    beforeEach(function(){
      card = new Card('Magic Mike', 2, 5, 10);
    })

    it('should start empty', function(){
      const actual = player.hand;
      const expected = [];
      assert.deepStrictEqual(actual, expected);
    })

    xit('should be able to play card choosing agility', function(){
      player.hand.push(card);
      const actual = player.play('agility');
      const expected = 10;
      assert.strictEqual(actual, expected);
    })

    xit('should be able to play card choosing intelligence', function(){
      player.hand.push(card);
      const actual = player.play('intelligence');
      const expected = 2;
      assert.strictEqual(actual, expected);
    })

    xit('should be able to play card choosing strength', function(){
      player.hand.push(card);
      const actual = player.play('strength');
      const expected = 5;
      assert.strictEqual(actual, expected);
    })

    xit('chosen wrong attribute for card, wrong choice message, no card played', function(){
      player.hand.push(card);
      const actual = player.play('bonanza');
      const expected = 'This is not an attribute!';
      assert.strictEqual(actual, expected);
    })

    xit('chosen wrong attribute for card, no card played, hand is the same', function(){
      player.hand.push(card);
      player.play('bonanza');
      const actual = player.hand.length;
      const expected = 1;
      assert.strictEqual(actual, expected);
    })

  })

})
