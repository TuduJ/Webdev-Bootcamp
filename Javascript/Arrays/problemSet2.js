var ar = [1,2,3,4,5,6];

function printReverse(arr){
    var l = arr.length - 1;
    while(l>=0){
        console.log(arr[l]);
        l--;
    }
}

function isUniform(arr){
    var rt = new Boolean();
    rt = true;
    arr.forEach(function(item){
        if(item !== arr[0]){
            rt = false;
        }
    })
    return rt;
}


function sumArray(arr){
    var sum = 0;
    arr.forEach(function(item){
        sum += item;
    })
    return sum;
}

function max(arr){
    var m = arr[0];
    arr.forEach(function(item){
        if(item > m){
            m = item;
        }
    })

    return m;
}