var Hero = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.favFood = options.favFood;
  this.quests = [];
}

Hero.prototype = {

  sayName: function(name) {
    return "Greetings! My parents named me " + this.name;
  }

}

module.exports = Hero;