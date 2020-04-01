var randomNumber = Math.floor(Math.random()*1000000);
//console.log(randomNumber);
var guessedNumber = Number(prompt("Guess a number : "));

while (guessedNumber != randomNumber){

    if(guessedNumber < randomNumber)
    guessedNumber = Number(prompt(" Number is Too less, Guess again : "));

    else if(guessedNumber > randomNumber)
    guessedNumber = Number(prompt(" Number is Too high, Guess again : "));

    else{
        console.log("Correct!!")
    }

}

