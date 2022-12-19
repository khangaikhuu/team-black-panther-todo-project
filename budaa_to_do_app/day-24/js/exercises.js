console.log("exercises");



let arrays = [1, 3, 4, 5, 6, 7, 8];



//
function addition (arr, callback){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
}

function addTwo (n) {
    return n + 2; 
}


//  Ogogdson array - nii buh elementuudeer guigeed element 
// bolgon deer ogogdson punktsiig heregjuuleh punkts bichne uu.


console.log(arrays)
addition(arrays, addTwo)
console.log(arrays)

