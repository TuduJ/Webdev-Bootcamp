var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScoreDisplay = document.querySelector("#maxScoreDisplay");
var inputMaxScore = document.querySelector("#inputMaxScore");
// var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;

// maxScoreDisplay.textContent = inputMaxScore;
var winScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        // console.log(p1Score, winScore);
        if(p1Score === winScore){
            gameOver = ! gameOver;
            p1Display.classList.add("winner");
            p2Display.classList.add("wellPlayed");
        }
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === winScore){
            gameOver = !gameOver;
            p2Display.classList.add("winner");
            p1Display.classList.add("wellPlayed");
        }
    }
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner","wellPlayed");
    p2Display.classList.remove("winner","wellPlayed");
    gameOver = false;
    winScore = 5;
}

resetButton.addEventListener("click", function(){
    reset();
    inputMaxScore.value = null;
    maxScoreDisplay.textContent = winScore;
});

inputMaxScore.addEventListener("change",function(){
    reset();
    maxScoreDisplay.textContent = inputMaxScore.value;
    winScore = Number(inputMaxScore.value);
});
// numInput.addEventListener("change",function(){
//     alert("Clicked the input")
// });