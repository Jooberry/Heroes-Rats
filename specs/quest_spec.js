var assert = require('assert')
var Quest = require('../quest.js')

describe('Quest', function() {

  var quest = new Quest({ difficulty: "Demon", urgency: "High", reward: "Carrot cake", completion: false });

  it('has a difficulty level, urgency level, reward and completion', function() {
    assert.deepEqual("Demon", quest.difficulty);
    assert.deepEqual("High", quest.urgency);
    assert.deepEqual("Carrot cake", quest.reward);
    assert.deepEqual(false, quest.completion);
  })

  it('can change a quest to having been completed', function() {
    assert.deepEqual(true, quest.completeQuest(quest));
  })

}) 