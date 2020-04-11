// ------ Important Selector Methods -------
//      1. documment.getElementById()
//      2. document.getElementsByClassName()
//      3. document.getElementsByTagName()
//      4. document.querySelector()
//      5. document.querySelectorAll()

//      console.dir(tag) ---> shows the DOM of the tag



// --------- getElementByID -----------
var tag = document.getElementById("highlight");
// call tag in the console of the browser


// --------- getElementsByClassName -----------
var tags = document.getElementsByClassName("bolder");
// call tag in the console of the browser


// --------- getElementsByTagName -----------
var tags = document.getElementsByTagName("li");
// call tag in the console of the browser


// ---------- querySelector -----------
var tag = document.querySelector("h1");
var li = document.querySelector("li a.special");

// ---------- querySelectorAll -----------
var bolded = document.querySelectorAll(".bolded");