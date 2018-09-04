const Player = function(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.play = function(attribute){
  if (attribute === 'strength'){
    cardPlayed = this.hand.pop();
    return cardPlayed.strength;
  } else if (attribute === 'agility') {
    cardPlayed = this.hand.pop();
    return cardPlayed.agility;
  } else if (attribute=== 'intelligence') {
    cardPlayed = this.hand.pop();
    return cardPlayed.intelligence;
  } else {
    return 'This is not an attribute!';
  }
}


module.exports = Player;
