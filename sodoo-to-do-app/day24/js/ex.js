console.log('exercises');

let arrays = [1, 3, 4, 5, 6, 7, 8,];

// function
function AddTho(n) {
    return n + 2;
}


// Өгөгдсөн аррай-ний бүх элементээр гүйгээд элемент болгон дээр өгөгдсөн фунцыг хэрэгжүүлдэг функц бич.
function addition(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
    }
}
console.log(arrays);
addition(arrays, AddTho); // [3, 5, 6, 7, 8, 9, 10]
console.log(arrays);