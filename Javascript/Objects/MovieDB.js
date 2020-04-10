var movies = [
    {
        title: "Harry Poter",
        rating: 8.9,
        hasWatched: true
    },
    {
        title: "God Father",
        rating: 9.2,
        hasWatched: false
    },
    {
        title: "Bad Boys",
        rating: 7.8,
        hasWatched: true
    },
    {
        title: "IP man",
        rating: 8.5,
        hasWatched: false
    }
]



// ------------ Using for loop ----------------

// for( var i = 0; i < movies.length; i++){
//     var result = "You have ";
//     if(movies[i].hasWatched === true){
//         result += "watched ";
//     }
//     else{
//         result += "not seen ";
//     }

//     console.log(result + "\"" + movies[i].title + "\" - " + movies[i].rating +" stars");
// }






// ------------------ Using for Each -----------------

// movies.forEach(function(movies){
//     var result = "You have ";    
//     if(movies.hasWatched === true){
//         result += "watched ";
//     }
//     else{
//         result += "not seen ";
//     }

//     console.log(result + "\"" + movies.title + "\" - " + movies.rating +" stars");
// });






// ----------- forEach Optimization -------------

function buildString(movies){
    var result = "You have ";    
    if(movies.hasWatched === true){
        result += "watched ";
    }
    else{
        result += "not seen ";
    }

    result = result + "\"" + movies.title + "\" - " + movies.rating +" stars";
    return result
}

movies.forEach(function(movies){
    console.log(buildString(movies));
});