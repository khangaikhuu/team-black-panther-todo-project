console.log("exercises");

let arrays = [1, 3 ,4, 5, 6, 7, 8];

function addTwo (n){
    return n + 2;
}

function addition(arr, callback){
    let results = [];
    for(i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i]);
        results.push(arr[i])
    }
    return results
}

console.log(addition(arrays, addTwo));

