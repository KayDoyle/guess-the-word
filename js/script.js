const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remaingingGuessesSpan = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
  const guess = guessLetter.value;
  //console.log(guess);
  guessLetter.value = "";
});
