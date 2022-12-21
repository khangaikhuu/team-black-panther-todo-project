console.log('exercises');

let arrays = [1, 3, 4, 5, 6, 7, 8];




// Өгөгдсөн array-ний бүх элементүүдээр гүйгээд элемент болгон дээр өгөгдсөн функцыг хэрэгжүүлдэг функц бичнэ үү
function addition (arr, callback){
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }
}


function addTwo (n){
    return n + 2;
}
console.log(arrays);
addition(arrays, addTwo); /// [3, 5, 6, 7, 8, 9, 10]
console.log(arrays);