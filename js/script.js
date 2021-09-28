const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remaingingGuessesSpan = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Word letter placeholder ●
const placeholder = function (word) {
  const placeholderLetters = [];
  for(const letter of word) {
    //console.log(letter);
    placeholderLetters.push("●");
  }
  wordProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function(e){
  e.preventDefault();
  guessMessage.innerText = "";
  const guess = guessLetter.value;
  //console.log(guess);
  const goodGuess = inputValidator(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  guessLetter.value = "";
});


const inputValidator = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    guessMessage.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    guessMessage.innerText = "Just one letter, please :)";
  } else if (!input.match(acceptedLetter)){
    guessMessage.innerText = "Please enter a letter from A-Z."
  } else {
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)){
    guessMessage.innerText = "You already guessed that letter, try again!"
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
}
