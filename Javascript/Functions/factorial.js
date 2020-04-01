// Using recursion
function fact_r(num){
    if(num === 0)
        return 1;
    else
        return (num * fact(num-1));
}

// Using For loop
// function fact_f(num){
//     var fact = 1;
//     if(num === 0)
//         return fact;
//     else{
//         for(var i = 1 ; i<=num ; i++)
//             fact = fact * i;
//         return fact;
//     }
// }

// Using While loop
// function fact_w(num){
//     var fact = 1;
//     while (num !== 0){
//         fact *= num;
//         num--;
//     }
// }