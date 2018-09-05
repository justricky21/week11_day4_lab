const Player = function(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.play = function(){
  return this.hand.shift();
}


module.exports = Player;
