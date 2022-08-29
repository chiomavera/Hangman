//array of words
let words = [
  "eviln",
  "amaka",
  "brayin",
  "vera",
  "jennifer",
  "smart",
  "ebuka",
  "louis",
  "love",
  "elo",
  "kosi",
  "smart",
  "stanley",
  "peter",
  "kate",
  "charity",
  "alex",
  "chisom",
];

//selecting random word from the array
let word = words[Math.floor(Math.random() * words.length)];

//setting up answer array
let answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "-";
}

let remainingLetters = word.length;
let numberOfGuesses = 10;

//welcome message
alert(
  "Welcome to Hangman!" +
    "\n The word guessing game" +
    "\n Try your Luck on guessing the secret word" +
    "\n you have 10 chances to guess the right word"
);

//The game loop
while (remainingLetters > 0 && numberOfGuesses > 0) {
  // show player progress
  alert(answerArray.join(" "));

  //Get a guess from the player
  let guess = prompt("guess a letter, or click cancel to stop playing.");
  guess = guess.toLowerCase();

  if (guess === null) {
    //Exit the game loop
    break;
  } else if (guess.length !== 1) {
    alert("You are only allowed to guess a single letter at go.");
  } else {
    numberOfGuesses--;
    // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "-") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // game loop games
}
// show the answer and congratulate the player
alert(answerArray.join(" "));
if (numberOfGuesses > 0) {
  alert("Good job! The answer was " + word);
} else {
  alert(
    "To bad! The answer was " +
      word +
      "\n Play again, you might win on your next try"
  );
}
