// To add listener to an element we use the method 'addEventListener()'
// <----- SYNTAX ------>
// element.addEventListener(type,functionToCall);

var h1 = document.querySelector("h1");

h1.addEventListener("click",function(){
    alert("H1 was clicked");
})

h1.addEventListener("click",function(){
    h1.style.background = "orange";
})

// We can add more than one listener on an element, on the same/different event type.