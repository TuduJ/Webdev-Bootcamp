//      DOM Manipulation
// ----------Topics to be covered-----------
// 1. Changing an Element
// 2. Adding/removing classes
// 3. Changing the content of a tag
// 4. Changing attributes(src,href,etc.)


// STYLE Property
// select
var tag = document.getElementById("top");
// Manipulate
tag.style.color = "pink";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// Alternate way of styling is
// some class id defined in the css file.
// tag.classList.add("someClass");          <-------Alternate way

// classList method
// 1. tag.classList.add("clase_name");
// 2. tag.classList.remove("clase_name");
// 3. tag.classList.toggle("clase_name");       <--- If the element has the 'class_name' class then it will remove it other wise it will add it to the element.


// TEXT Content
// var p = document.getElementsByTagName("p");
// p.textContent = "Last got rid";
// document.querySelector("h1").textContent = "END OF THE LESSON";          <------ This changes the content inside the h1 tag.


// use of innerHTML
// var p = document.getElementsByTagName("p");
// p.innerHTML = "plants are awesome";        <----- This will select the the inner HTML tag inside the element and change it to 'plants are awesome'.
// console.log(p);




// -------BONUS TUTORIAL----------
// var body = document.body.textContent;
// console.log(body);

// document.body.textContent = "<h1>Goodbye!</h1>";      <------ textContent takes all the inputs along with the tag as string
// document.body.innerHTML = "<h1>Goodbye!</h1>";        <------ innerHTML treats the tags as HTML tags