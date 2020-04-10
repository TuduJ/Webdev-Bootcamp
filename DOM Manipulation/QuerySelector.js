// Selecting an HTML element by 'querySelector'
var h1 = document.querySelector("h1");
h1.style.color = "white";



var body = document.querySelector("body");
var bcolor = ["#96ceb4", "#ffeead", "#ff6f69", "#ffcc5c", "#88d8b0"];
var index = 0;

setInterval(function(){
    body.style.background = bcolor[index];
    index = (index+1)%5;
},1500);