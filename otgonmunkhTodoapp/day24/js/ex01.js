console.log("exercises");
let arrays = [1, 3, 4, 5, 6, 7, 8];
function addTwo (n){
    return n + 2;
}




function addition (arr, callback){
   for(let i = 0; i < arr.length; i++){
     arr[i] = callback(arr[i]);
   
   }
}

console.log(arrays);
addition(arrays, addTwo);  ///[3, 5, 6, 7, 8, 9, 10]
console.log(arrays);