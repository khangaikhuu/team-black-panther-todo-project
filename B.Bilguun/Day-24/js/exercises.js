console.log('exercises');

let arrays = [1, 3, 4, 5, 6, 7, 8];


// 



function addition (arr, callback){
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }
    return arr;
};

function addTwo (n) {
    return n + 2;
}
console.log(arrays);
let result = addition(arrays, addTwo);
console.log(result);