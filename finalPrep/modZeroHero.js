// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Red Lantern";
var specialAbility = "Faster than the speed of light";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hi! You're safe now!";
var catchPhrase = "Nearly Maximum Effort!";
// Declare two variables - power AND energy - set to integers
var power = 178;
var energy = 365;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power) * 500;
var fullEnergy = (energy) + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;
// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Vinestro", "Sky Pirate", "Dr. Goldface"];
var sidekicks = ["Flash", "The Rock", "Gardeners of the Universe"]

// Print the first sidekick to your console
console.log(sidekicks[0]);


// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Randal Savage");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var saveTheDay = 'Never fear, the Courageous Red Lantern is here!';
var badExcuse = 'I think I forgot to lock up my 1992 Subaru Outback. Be right back.';

function assessSituation(dangerLevel, saveTheDay, badExcuse) {

  if (dangerLevel > 50) {
      console.log(badExcuse);
  } else if (dangerLevel >= 10 && dangerLevel <= 50) {
      console.log(saveTheDay)
  } else {
      console.log("Meh. Hard pass.")
  }

};

assessSituation(99, saveTheDay, badExcuse);
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
// var announcement = 'Never fear, the Courageous Curly Bracket is here!';
// var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
//assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name = "Teke Teke",
  smell = "Death",
  weight = 3,
  citiesDestroyed = ["London", "Paris", "New York"],
  luckyNumbers = [3, 7, 13],
  address: {
    number: 13,
    street: "Evil Street",
    state: "FL",
    zip:30315};
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor(name, superpower, age) {
  this.name = name;
  this.superpower = superpower;
  this.age = age;
  this.archNemesis = "The Syntax Error";
  this.powerLevel = 100;
  this.energyLevel = 50;
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

sayName(nameNew) {
  this.name = nameNew;
}
maximizeEnergy(energyLevelNew) {
  this.energyLevel = 1000;
}
gainPower(powerLevelNew) {
  this.powerLevel = this.powerLevel + powerLevelNew;
}

};
// - Create 2 instances of your SuperHero class
var superHero1 = new SuperHero ("Meta Man", "Weather Control", 20);
//console.log(superHero1);
//var superHero2 = new SuperHero ("Captain Granite", "Fire Breathing", 65, "The Syntax Error", 100, 50);
//console.log(superHero2);
superHero1.sayName("Bob The Rooster"); superHero1.maximizeEnergy(); superHero1.gainPower(50);
console.log(superHero1);

//superHero2.sayName("Random");superHero2.maximizeEnergy();
//superHero2.gainPower();
//console.log(superHero2);

// Reflection
// What parts were most difficult about this exerise?

//The Function part... I struggle a bit with the relationshiup between creating
//variable and applying them to Fucntions. Where, when, how... Need to practice.

// What parts felt most comfortable to you?
// The early part, creating variables, etc...

// What skills do you need to continue to practice before starting Mod 1?
//Functions, classes, class methods...
