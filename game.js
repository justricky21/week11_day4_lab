const Card = require('./card.js');

const Game = function(deck){
  this.players = [];
  this.deck = deck;
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}

Game.prototype.dealCard = function(player){
    player.hand.push(this.deck.shift());
}

Game.prototype.turn = function(attribute){
  let player1 = this.players[0];
  let player2 = this.players[1];
  let firstPlayerCard = player1.play();
  console.log(firstPlayerCard.name);
  console.log(firstPlayerCard.attribute);
  let secondPlayerCard = player2.play();
  console.log(secondPlayerCard.name);
  console.log(secondPlayerCard.attribute);
  if ( firstPlayerCard.attribute > secondPlayerCard.attribute ){
    player1.hand.push(firstPlayerCard);
    player1.hand.push(secondPlayerCard);
    return `${player1.name} wins!`;
  } else if ( firstPlayerCard.attribute < secondPlayerCard.attribute ) {
    player2.hand.push(firstPlayerCard);
    player2.hand.push(secondPlayerCard);
    return `${player2.name} wins!`;
  } else if ( firstPlayerCard.attribute === secondPlayerCard.attribute ){
    return 'It\'s a tie, Jerry!';
  } else {
    return 'Something went wrong, Jerry!';
  }
}

//assumes that there's an even number of cards
Game.prototype.dealAllCards = function(){
  while(this.deck.length > 0){
    this.dealCard(this.players[0]);
    this.dealCard(this.players[1]);
  }
}

Game.prototype.playGame = function(attribute){
  this.dealAllCards();
  while(this.players[0].hand.length > 0 || this.players[1].hand.length > 0){
    this.turn(attribute);
  }
  if(this.players[0].hand.length === 0){
    return console.log(`${this.players[1].name} is the winner!`);
  } else if(this.players[1].hand.length === 1) {
    return console.log(`${this.players[0].name} is the winner!`);
  } else {
    return console.log('Something went wrong Jerry!');
  }

}

module.exports = Game
