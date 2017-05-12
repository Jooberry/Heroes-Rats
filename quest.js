var Quest = function(options) {
  this.difficulty = options.difficulty;
  this.urgency = options.urgency;
  this.reward = options.reward;
  this.completion = false;
}

module.exports = Quest;