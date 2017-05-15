var assert = require('assert')
var Food = require('../food.js')

describe('Food', function() {

  var food = new Food({ name: "Carrot cake", replenishmentValue: 50 });

  it('has a name and replenishment value', function() {
    assert.deepEqual("Carrot cake", food.name);
    assert.deepEqual(50, food.replenishmentValue);
  })

}) 