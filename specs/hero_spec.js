var assert = require('assert')
var Hero = require('../hero.js')
var Quest = require('../quest.js')
var Food = require('../food.js')

describe('Hero', function() {
var hero;
var quest1;
var quest2;
var quest3;
var food1;
var food2;

  beforeEach(function() {
  hero = new Hero({ name: "Wojtek", health: 100, favFood: "Cake" });
  quest1 = new Quest({ difficulty: "Demon", urgency: "High", reward: "Carrot cake", completion: false });
  quest2 = new Quest({ difficulty: "Meh", urgency: "Low", reward: "Loyalty card", completion: true });
  quest3 = new Quest({ difficulty: "Noob", urgency: "Medium", reward: "Booty", completion: false });
  food1 = new Food({ name: "Cake", replenishmentValue: 100 });
  food2 = new Food({ name: "Tiger bread", replenishmentValue: 50 });
  });

  it('has a name, health and favourite food', function() {
    assert.deepEqual("Wojtek", hero.name);
    assert.deepEqual(100, hero.health);
    assert.deepEqual("Cake", hero.favFood);
  })

  it('should have an empty array of quests at start', function() {
    assert.deepEqual(0, hero.quests.length);
  })

  it('can add quest to quests array', function() {
    hero.addQuest(quest1);
    assert.deepEqual(1, hero.quests.length);
  })

  it('can say their name', function() {
    assert.deepEqual("Greetings! My parents named me Wojtek", hero.sayName());
  })

  it('can eat food and health increases by replenishment value', function() {
    hero.eat(food2);
    assert.deepEqual(150, hero.health);
  })

  it('can eat their favourite food and health increases by 1.5 * replenishment value', function() {
    hero.eat(food1);
    assert.deepEqual(250, hero.health);
  })

  it('shows completed tasks', function(){
    hero.addQuest(quest1);
    hero.addQuest(quest2);
    hero.addQuest(quest3);
    var completedQuests = hero.viewCompletedQuests();
    assert.equal(1, completedQuests.length);
  })

  it('shows incomplete tasks', function(){
    console.log(hero)
    hero.addQuest(quest1);
    hero.addQuest(quest2);
    hero.addQuest(quest3);
    var incompleteQuests = hero.viewIncompleteQuests();
    assert.equal(2, incompleteQuests.length);
  })

}) 