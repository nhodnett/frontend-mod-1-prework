/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
bigEars
shortNose
}

var features = new Dog();
console.log(features);
// Prompt 2: Snack
class Snack {
sandwich
chips
}

var hungry = new Snack();
console.log(hungry);

// Prompt 3: Shirt
class Shirt {
buttons
sleeves
}

var details = new Shirt();
console.log(details);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor() {
this.bigEars = 2
this.shortNose = 1"
this.waggyTail = "fast"
  }
}
var features = new Dog();
console.log(features);

// Prompt 2: Snack
class Snack {
  constructor() {
this.sandwich = "6inch"
this.chips = "1 bag"
this.softDrink = "8oz"
  }
}
var hungry = new Snack();
console.log(hungry);
// Prompt 3: Shirt
class Shirt {
  constructor() {
this.buttons = "full front"
this.sleeves = "long"
this.collar = "button down"
  }
}
var details = new Shirt();
console.log(details);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(ears, fur, tail) {
this.ears = ears;
this.fur = fur;
this.tail = tail;
  }
}

var features = new Dog(2, "long", "high speed");
console.log(features);

var otherFeatures = new Dog("upright", "thick", "strong");
console.log(otherFeatures);
// Prompt 2: Snack
class Snack{
  constructor(sandwich, chips, softDrink){
    this.length = sandwich;
    this.flavor = chips;
    this.size = softDrink;
  }
}

var hungry = new Snack("6 inch", "Cheesy", "8oz");
console.log(hungry);

var stillHungry = new Snack("12 inch", "Sea Salt", "16oz");
console.log(stillHungry);

// Prompt 3: Shirt
class Shirt{
  constructor(buttons, sleeves, collar){
    this.fastener = buttons;
    this.length = sleeves;
    this.style = collar;
  }
}

var details = new Shirt("full length", "long", "button down");
console.log(details);

var moreDetails = new Shirt("Pearl", "Double Button", "Collar Bars");
console.log(moreDetails);
