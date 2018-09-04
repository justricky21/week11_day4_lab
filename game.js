const Card = require('./card.js');

const Game = function(){
  this.players = [];
  this.deck = listOfCards;
}
//method deallAllCards assumes that there's an even number of cards
let listOfCards = [new Card('Magic Mike', 2, 5, 10),
                  new Card('Superman', 6, 9, 7),
                  new Card('Scarlet Witch', 7, 10, 5),
                  new Card('Black Widow', 8, 6, 9),
                  new Card('Wonder Woman', 8, 7, 5),
                  new Card('The Flash', 7, 4, 10),
                  new Card('Batman', 10, 5, 6),
                  new Card('Magic Mike', 2, 5, 10)]

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}

Game.prototype.dealCard = function(player){
    player.hand.push(this.deck.pop());
}

Game.prototype.turn = function(attribute){
  let player1 = this.players[0];
  let player2 = this.players[1];
  this.dealCard(player1);
  this.dealCard(player2);
  let firstPlayerScore = player1.play(attribute);
  let secondPlayerScore = player2.play(attribute);
  if ( firstPlayerScore > secondPlayerScore ){
    return `${player1.name} wins!`;
  } else if ( firstPlayerScore < secondPlayerScore ) {
    return `${player2.name} wins!`;
  } else if ( firstPlayerScore === secondPlayerScore ){
    return 'It\'s a tie, Jerry!';
  } else {
    return 'Something went wrong, Jerry!';
  }
}


Game.prototype.dealAllCards = function(){
  //assumes that there's an even number of cards
  while (this.deck.length > 0){
    this.dealCard(this.players[0]);
    this.dealCard(this.players[1]);
  }
}

module.exports = Game
