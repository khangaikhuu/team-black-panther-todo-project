console.log('exercises')

// ex-01

let arrays = [1, 2, 3, 4, 5, 6, 7];


function addition(arr, callback){
    let results =[];
    for(let i = 0; i < arr.length; i++){
        arr[i]= callback(arr[i])
    }
}

function addTwo(n){
    return n + 2;
}

console.log(arrays);
addition(arrays, addTwo);
console.log(arrays);