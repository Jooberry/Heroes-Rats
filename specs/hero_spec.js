var assert = require('assert')
var Hero = require('../hero.js')

describe('Hero', function() {

  hero = new Hero({ name: "Wojtek", health: 100, favFood: "Cake" });

  it('has a name, health and favourite food', function() {
    assert.deepEqual("Wojtek", hero.name);
    assert.deepEqual(100, hero.health);
    assert.deepEqual("Cake", hero.favFood);
  })

}) 