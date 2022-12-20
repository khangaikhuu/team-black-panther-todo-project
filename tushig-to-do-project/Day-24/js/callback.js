// Callback function hereglee 
console.log(`Callback function hereglee`);

let button = document.getElementById("click-me");
console.log(button);

function clickMe() {
    console.log(`click me`);
}

button.addEventListener("click" , clickMe)

function log() {
    console.log(`Hello World`)
}

window.setTimeout(log, 3000);

// printDate gedeg funtion bicne
// ene function n odoo tsagiig vvsgeed tegeed HTML-r element dotor haruulna.
function printDate() {
    let p = document.getElementById('p-tag')
    let OdooTsag = new Date();
    p.innerHTML = OdooTsag 
}

window.setInterval(printDate, 3000);

// Array-г хүссэнээрээ шүүх callback function
console.log(`Array-г хүссэнээрээ шүүх callback function`);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function filter(numbers, callback) {
    let results = [];
        for (let i=0; i < numbers.length; i++) {
            if (callback(numbers[i])) {
                results.push(numbers[i]);
            }
        }
    return results;
}


function evenFunc(n) {
    return n%2===0
}

function oddFunc(n) {
    return n%2!==0
}

function byThreeFunc(n) {
    return n%3===0
}

const evens = filter(numbers, evenFunc); // [2, 4, 6, 8] tegsh too
console.log(evens);
const odds = filter(numbers, oddFunc); // [1, 3, 5, 7] sondgoi too
console.log(odds);
const byThree= filter(numbers, byThreeFunc); // [3, 6, 9]v 3-t huwaagddag too
console.log(byThree);



// ugugdsun array-iin elementuudeer gvigeed elements bolgon deer ugugdsun Function heregjuuldeg function bichne uu.
let arrays = [3, 5, 6, 7, 8, 9, 10];

function addition (arr, callback) {
    for (let i=0; i<arr.length; i++) {
        arr[i] = callback(arr[i])
    }   
}

function addTwo (n) {
    return n + 2;
}

console.log(arrays);
addition(arrays, addTwo); // [3, 5, 6, 7, 8, 9, 10]
console.log(arrays)