const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');


describe('Game', function(){
  let game;
  let player1;
  let player2;
  let deck;
  beforeEach(function(){
    player1 = new Player('Ricardo the Great');
    player2 = new Player('Mike the Magical');
    deck = [new Card('Magic Mike', 2, 5, 10),
            new Card('Superman', 6, 9, 7),
            new Card('Scarlet Witch', 7, 10, 5),
            new Card('Black Widow', 8, 6, 9),
            new Card('Wonder Woman', 8, 7, 5),
            new Card('The Flash', 7, 4, 10),
            new Card('Batman', 10, 5, 6),
            new Card('Magic Mike', 2, 5, 10)];
    game = new Game(deck);
  })

  it('should have players', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    const actual = game.players.length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  })

  it('should have a 8 card deck', function(){
    const actual = game.deck.length;
    const expected = 8;
    assert.strictEqual(actual, expected);
  })

  it('should deal cards to players', function(){
    game.dealCard(player1);
    const actual = game.deck.length;
    const expected = 7;
    assert.strictEqual(actual, expected);
  })

  it('player should he dealt a card', function(){
    game.dealCard(player1);
    const actual = player1.hand.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  })

  it('should determine winner on one turn', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.dealCard(player1);
    game.dealCard(player2);
    console.log(game.turn(agility));
    const actual = player1.hand.length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  })

  it('should empty deck by dealing all cards', function(){
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

  it('game should be played all at once until there are no cards left', function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    const actual = 'Ricardo the Great is the winner!'
    const expected = game.playGame('agility');
    assert.strictEqual(actual, expected);
  })


})
