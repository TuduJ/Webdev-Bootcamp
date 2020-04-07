var colors = ["red", "blue", "green", "yellow"];

// function myForEach(arr, func){
//     for (var i = 0 ; i < arr.length ; i++){
//         func(arr[i]);
//     }
// }


Array.prototype.myForEach = function(func){
    for (var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

colors.myForEach(function(name){
    console.log("i love " + name);
})