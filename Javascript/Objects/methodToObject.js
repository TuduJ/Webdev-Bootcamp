var obj = {
    name: "Jitendra",
    age: 26,
    isCool: true,
    friends: ["Bikas", "Ankur", "John", "Sarwna"],
    
    //prototype of function add 
    add: function(x,y){             //add is the function name
        return x+y;                 //function definition
    }
}

//  -------- Use of this Keyworrd --------

// function print(arr){
//     arr.forEach(function(el){        
//         console.log(el);
//     });
// }

// The method above is written inside the object along with the use of 'this' keyword is shown below

// function to rint the array in the object
obj.print = function(){
    this.friends.forEach(function(el){
        console.log(el);
    });
}