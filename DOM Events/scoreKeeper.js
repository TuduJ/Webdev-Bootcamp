var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScore = document.querySelector("#maxScore");
var inputMaxScore = document.querySelector("#inputMaxScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

// maxScore.textContent = inputMaxScore;
maxScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score === maxScore){
            gameOver = true;
            p1Display.style.color = "green";
            p2Display.style.color = "red";
        }
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === maxScore){
            gameOver = true;
            p2Display.style.color = "green";
            p1Display.style.color = "red";
        }
    }
});

reset.addEventListener("click", function(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    p1Score = 0;
    p2Score = 0;
    gameOver = false;

});
