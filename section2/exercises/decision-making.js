/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
Line 14 is setting a condition, "if" the doorChoice === 1, (true), then "hat".
Line 16 offers an "else" statement, so if door 2 is chosen, (false), then a different line of code is run, "scarf".
2. What variable has a new value assigned to it after the first if statement executes?
Bear Clothing === Hat, not Hat or Scarf.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Line 27 is setting a condition, "if" the bearChoice === 1, then ending 1 happens.
Line 29 offers an "else if" statement, so if bearChoice ===2, then ending 2 happens.
Line 31 offers another "else if" statement, so if bearChoice ===3, then ending 3 happens.
Line 33 offers an "else" statement, so if a choice other than 1, 2, 3 is made, then ending 4 happens.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You run as fast as you can into the next room. It's full of snakes!
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The bear puts on a hat, you tell the bear it is too small and it starts to cry!
7. What is your favorite ending?
You offer the bear your scarf and the bear shows you a secret passage out!
*/
