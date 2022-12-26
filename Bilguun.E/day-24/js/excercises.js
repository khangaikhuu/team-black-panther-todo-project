let arrays = [1, 2, 3, 4, 5, 6, 7, 8]



function addition(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i])
    }
}

function addTwo(n) {
    return n + 2;
}
addition(arrays, addTwo)
console.log(arrays)