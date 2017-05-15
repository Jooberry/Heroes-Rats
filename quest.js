var Quest = function(options) {
  this.difficulty = options.difficulty;
  this.urgency = options.urgency;
  this.reward = options.reward;
  this.completion = options.completion;
}

Quest.prototype = {
  completeQuest: function(quest) {
    return this.completion = true;
  }

}

module.exports = Quest;