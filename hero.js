var Hero = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.favFood = options.favFood;
  this.quests = [];
}

Hero.prototype = {

  sayName: function(name) {
    return "Greetings! My parents named me " + this.name;
  },

  addQuest: function(quest) {
    this.quests.push(quest);
  },

  eat: function(food) {
    var upHealth = food.replenishmentValue * (food.name === this.favFood ? 1.5 : 1);
    this.health += upHealth;
  },

  viewCompletedQuests: function(){
    var completedQuests = [];
    for (quest of this.quests){
      if (quest.completion === true){
        completedQuests.push(quest);
        }
      }
      return completedQuests;
    },

  viewIncompleteQuests: function(){
    var incompleteQuests = [];
    for (quest of this.quests){
      if (!quest.completion){
        incompleteQuests.push(quest);
        }
      }
      return incompleteQuests;
  }

}

module.exports = Hero;