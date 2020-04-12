var img1 = document.getElementsByTagName("img")[0];  //<----- Here the iindex should be selected otherwise it will return the selected item as collection and the getAttribute(), setAttribute(), etc will not work
console.log(img1.getAttribute("src"));

img1.setAttribute("src","https://git-scm.com/images/logos/logomark-orange@2x.png");
console.log(img1.getAttribute("src"));

var a = document.getElementsByTagName("a")[0];
console.log(a.getAttribute("href"));
a.setAttribute("href","https://www.youtube.com/");
console.log(a.getAttribute("href"));

a.textContent = "Click me";