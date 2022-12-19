// console.log("exercises");

let arrays = [1, 3, 4, 5, 6, 7, 8]

function addition (arrays, callback){
    for (let i = 0; i < arrays.length; i++){
        arrays[i]=callback(arrays[i])
    }
}





function addTwo (n){
    return n + 2;
}
console.log(addTwo)

addition(arrays, addTwo);
console.log(arrays);

