const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');

describe('Game', function(){
  let game;
  let player1;
  let player2;
  beforeEach(function(){
    game = new Game();
    player1 = new Player('Ricardo the Great');
    player2 = new Player('Mike the Magical');
  })

  xit('should have players', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    const actual = game.players.length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  })

  xit('should have a 8 card deck', function(){
    const actual = game.deck.length;
    const expected = 8;
    assert.strictEqual(actual, expected);
  })

  xit('should deal cards to players', function(){
    game.dealCard(player1);
    const actual = game.deck.length;
    const expected = 7;
    assert.strictEqual(actual, expected);
  })

  xit('player should he dealt a card', function(){
    game.dealCard(player1);
    const actual = player1.hand.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  })

  xit('should determine winner on one turn', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    const actual = game.turn('agility');
    const expected = 'Ricardo the Great wins!';
    assert.strictEqual(actual, expected);
  })

  xit('should empty deck by dealing all cards', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.dealAllCards();
    const actual = game.deck.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  })

  it('player should have four cards after emptying deck', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.dealAllCards();
    const actual = player1.hand.length;
    const expected = 4;
    assert.strictEqual(actual, expected);
  })


})
