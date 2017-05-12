var assert = require('assert')
var Quest = require('../quest.js')

describe('Quest', function() {

  quest = new Quest({ difficulty: "Demon", urgency: "High", reward: "Carrot cake", completion: false });

  it('has a difficulty level, urgency level, reward and completion', function() {
    assert.deepEqual("Demon", quest.difficulty);
    assert.deepEqual("High", quest.urgency);
    assert.deepEqual("Carrot cake", quest.reward);
    assert.deepEqual(false, quest.completion);
  })

}) 