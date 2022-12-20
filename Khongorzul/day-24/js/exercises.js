let arrays = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrays)

function addition(arr, callback){
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i]);
    }
}

function addTwo(n){
    return n + 2;
}

addition(arrays, addTwo);
console.log(arrays);