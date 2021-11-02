// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear - state a function, list the parameters
function buildABear(name, age, fur, clothes, specialPower) {
  //declare variable greeting, a string incorporating the name parameter concatenated in
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declare variable demographics in an array
  var demographics = [name, age];
  // declare variable power saying as a string and include special power parameter concatenated in
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//declare an object for built bear, include key value pairs, strings, number, array, boolean
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// When the function is called, it will return the built bear
  return builtBear
}
// call the function - option 1
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// call the function - option 2
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz - state a function
function fizzBuzz(num1, num2, range) {
  //a for loop made up of loop variable, condition, moment expression
  for (var i = 0; i <= range; i++) {
    //if i is divisable by num1, and i is divisable by num2 with 0 remainder, (Modulo), then print fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //else if i is divisable by num 1 with 0 remainder, (Modulo), print fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      //else if i is divisable by num 2 with 0 remainder, (Modulo), print buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      // else print the index number, (i)
    } else {
      console.log(i);
    }
  }
}
//state num 1, num 2, range
fizzBuzz(3, 5, 100);
//state num 1, num 2, range
fizzbuzz(5, 8, 400);
