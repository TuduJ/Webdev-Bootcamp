// To add listener to an element we use the method 'addEventListener()'
// <----- SYNTAX ------>
// element.addEventListener(type,functionToCall);


//1. Example:-
// var h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){              <---- Event listener 1
//     alert("H1 was clicked");
// })
// h1.addEventListener("click",function(){              <----- Event Listener 2
//     h1.style.background = "orange";
// })

// We can add more than one listener on an element, on the same/different event type.



//2.  Examle to show changing of ul color everytime it is clicked
// var lis = document.querySelectorAll("li");
// for(var i = 0; i < lis.length; i++){
//     lis[i].addEventListener("click",function(){
//         if(this.style.color == "red"){
//             this.style.color = "black";
//     }
//         else{
//             this.style.color = "red";
// }
// });
// }


// Another example for event listener
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

function changeText(){
    paragraph.textContent = "You clicked the button!!";
}

button.addEventListener("click", changeText);