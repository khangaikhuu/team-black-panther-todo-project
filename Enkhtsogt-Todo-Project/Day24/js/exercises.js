console.log("exercises");


let arrays=[1, 3, 4, 5, 6, 7, 8];

//
function addTwo(n){
    return n+2 ;
}

// function filter (numbers,callback){
//     let result = [];
//     for(let i =0 ; i < numbers.length; i++){
//         if(callback(numbers[i])){
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// }

//ugugdsun array iin buh elementuud guigeed element bolgon deer ugugdsun funktsiig heregjuuldeg funkts bichne uu

function addition(arr, callback){
    let result = [];
    for(let i =0 ; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }
    return result;
}

addition(arrays, addTwo); /// [3, 5, 6, 7, 8, 9, 10]

console.log(arrays)