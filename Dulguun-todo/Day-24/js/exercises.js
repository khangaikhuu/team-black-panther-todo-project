let arrays = [1, 3, 4, 5, 6, 7, 8];


//Ugugdsun array-nii buh element bolgon deer ugugdsun functioniig heregjuuldeg function bitchne uu.
function addition(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
    }
}

function addTwo(n) {
    return n + 2;
}

console.log(arrays);

addition(arrays, addTwo);

console.log(arrays);