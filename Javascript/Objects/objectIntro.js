//  ---------------Syntax----------------- 
//     var <object_name> = {
//         key1 = value1,
//         key2 = value2,
//         .
//         .
//         .
//         .
//         keyn = valuen
//     };

var person = {
    name : "Travis",
    age : 21,
    city : "LA"
};


// -------------Retrieving Data--------------- 
//Bracket notation
console.log(person["name"]);
//Dot notation
console.log(person.age);


// We cannot use dot notation if the property starts with a number
someObject.1property    //INVALID
someObject["1property"] //VALID

//We cannot lookup using a variable with bracket notation
var str = "str"
someObject.str      //Doesn't look for "name"
someObject["str"]   //Does evaluate str and looks for "name"

// We cannot use dot notation for the property names with spaces
someObject.fav Color    //INVALID
someObject["fav color"] //VALID



// -------------------Updating Data---------------------
var person ={
    name: "Travis",
    age: 21,
    city: "LA"
};
// to update age
person["age"] +=1;
// to update city
person["city"] = "London";


// ------------------Creating Object---------------------
// make an empty object and then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";
// all at once
var person ={
    name: "Travis",
    age: 21,
    city: "LA"
};
// another way of initializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";