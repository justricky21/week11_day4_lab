const assert = require('assert');
const Card = require('../card.js');

describe('Card', function(){

  let card;
  beforeEach(function(){
    card = new Card('Magic Mike', 2, 5, 10);
  })
  //cards have name, intelligence, strength and agility

  it('should have a name', function(){
    const actual = card.name;
    const expected = 'Magic Mike';
    assert.strictEqual(actual, expected);
  })

  it('should have intelligence', function(){
    const actual = card.intelligence;
    const expected = 2;
    assert.strictEqual(actual, expected);
  })

  it('should have strength', function(){
    const actual = card.strength;
    const expected = 5;
    assert.strictEqual(actual, expected);
  })

  it('should have agility', function(){
    const actual = card.agility;
    const expected = 10;
    assert.strictEqual(actual, expected);
  })










})
