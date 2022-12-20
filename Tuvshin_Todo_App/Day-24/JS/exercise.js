console.log('Exercise');




let array = [1, 2, 3, 4, 5, 6, 7, 8];
function addition(array, callback){
    let results = [];
    for ( let i = 0; i < array.length; i++) {
      array[i] = callback(array[i])}
}

function addTwo(n) {
    return n + 2;
}

console.log(array);
addition(array,addTwo);
console.log(array);