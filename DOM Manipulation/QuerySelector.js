// Selecting an HTML element by 'querySelector'
var h1 = document.querySelector("h1");
h1.style.color = "white";



var body = document.querySelector("body");
var bcolor = ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5 ", "#ff8b94"];
var index = 0;

setInterval(function(){
    body.style.background = bcolor[index];
    index = (index+1)%5;
},1500);