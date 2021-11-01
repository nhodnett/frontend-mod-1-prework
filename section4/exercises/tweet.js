/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author = author,
  this.content = content,
  this.timeStamp = timeStamp,
  this.numberOfLikes = numberOfLikes,
  this.comments = comments
}

changeNumberOfLikes() {
    this.numberOfLikes ++;
  }

  addComments(commentNew) {
      this.comments.push(commentNew);
    }
};
var firstTweet = new Tweet ("Nathan Hodnett", "This is my first Tweet!", "10/31/21", 0, ["Hi, Nathan!"]);
//console.log(firstTweet);

var secondTweet = new Tweet ("Nathan Hodnett", "Guess what? This is my second Tweet!", "10/31/21", 1, ["Nice!"]);
//console.log(secondTweet);

var thirdTweet = new Tweet ("Nathan Hodnett", "You've guessed it... This is my third Tweet!", "10/31/21", 2, ["Pro!"]);
//console.log(thirdTweet);

firstTweet.changeNumberOfLikes();firstTweet.addComments("Nice to see you on here finally!");
console.log(firstTweet);

secondTweet.changeNumberOfLikes(); secondTweet.addComments("Getting the hang of it!");
console.log(secondTweet);

thirdTweet.changeNumberOfLikes(); thirdTweet.addComments("Hallelujah!!!");
console.log(thirdTweet);
