var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isPurple = false;
// function toggleColor(){
//     if(isPurple){
//         body.style.background = "white";
//         // isPurple = false;
//     }
//     else{
//         body.style.background = "purple";
//         // isPurple = true;
//     }
//     isPurple = !isPurple;                   // <----- instead of changing color at line 7 and 11 we can use this in one line. Every time the clor changes the boolean value also toggles.
// }

// button.addEventListener("click", toggleColor);




// Another way of toggling using classList.Toggle()
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});