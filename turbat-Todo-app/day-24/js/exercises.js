console.log("exercises");

let arrays = [1, 2, 3, 4, 5, 6, 7, 8];



function addition(arrays, callback) {
    let results = [];
    for (let i = 0; i <arrays.length; i++) {
        if (callback(arrays[i])) {
            results.push(arrays[i]);
        }
    }console.log(results);
}


function addTwo(n){
    return n + 2;
}


addition(arrays, addTwo); //[3,4, 5, 6, 7, 8, 9, 10]
