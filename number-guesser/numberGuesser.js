let prompt = require("prompt-sync")();

const guessNumber = function(answer) {
  let count = 0;
  let guesses = [];

  while (true) {
    let guess = parseInt(prompt("Guess a number: "));

    // error checking
    if (isNaN(guess)) {
      console.log('Not a number');
      continue;
    }
    if (guesses.includes(guess)) {
      console.log('Already Guessed!');
      continue;
    }

    // increment and update
    count += 1;
    guesses.push(guess);

    if (guess < answer) {
      console.log('Too Low!');
    } else if (guess > answer) {
      console.log('Too High!')
    } else {
      return `You got it! You took ${count} attempts!`
    }
  }
}

let answer = Math.floor(Math.random() * 100);
console.log(guessNumber(answer));