//list of random words to choose from

var POSSIBLE_WORDS = ["obdurate", "verismilitude", "defenestrate", "obsequious",
                      "dissonant", "toady", "idempotent"];
var MAX_GUESS = 6;
var guessCount = MAX_GUESS;
var guesses = "";//guessed letter
var word = "";

function newGame() {
    //choose a random word from the list
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guessCount = MAX_GUESS;
    guesses = "";

    updatePage();//show initial word clue - all underscore
}

function guessLetter() {
    var input = document.getElementById("guess");
    var clue = document.getElementById("clue");
    var letter = input.value;
    if(guessCount == 0 || clue.innerHTML.indexOf("_") < 0 || guesses.indexOf(letter) >= 0){
        return;//game over
    }
    
    if( word.indexOf(letter) < 0){
        guessCount--;//incorrect guess
    }
    guesses += letter;
    updatePage();
}

//update the word clue to the current game state
function updatePage() {
    var clueString = "";
    for (var i=0; i<word.length; i++){
        var letter = word.charAt(i);
        if(guesses.indexOf(letter) >= 0){//more than 1 guess
            clueString += letter + " ";
        }else{
            clueString += "_ ";
        }
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
    
    //show guess by the player
    var guessArea = document.getElementById("guesses");
    if(guessCount == 0){
        guessArea.innerHTML ="You lose!";
    }else if(clueString.indexOf("_") < 0){
         guessArea.innerHTML ="You Won!";
    }else{
         guessArea.innerHTML = "Guesses: " + guesses;
    }
    
    //update hangman image
    var image = document.getElementById("hangmanpic");
    image.src = "hangmanImg/hangman" + guessCount + ".jpg";
}