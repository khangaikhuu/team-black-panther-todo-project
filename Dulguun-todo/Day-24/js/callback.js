let button = document.getElementById("click-me");


//1
function clickMe() {
    console.log('click me');
}

button.addEventListener("click", clickMe);

//2
function log() {
    console.log('Hello');
}

window.setTimeout(log, 3000);

//3 PrintDate
function printDate() {
    let now = new Date();
    let timer = document.getElementById('timer');
    timer.innerHTML = now;
}
window.setInterval(printDate, 1000);

//4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filter(numbers, callback) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {

        if (callback(numbers[i])) {
            results.push(numbers[i]);
        }
    }
    return results;
}

function evenFunc(n) {
    return n % 2 === 0;
}

function oddFunc(n) {
    return n % 2 !== 0;
}
function divideByThreeFunc(n) {
    return n % 3 === 0;
}


const evens = filter(numbers, (n) => { return n % 2 === 0 }) // [2, 4, 6, 8]
const odds = filter(numbers, (n) => { return n % 2 !== 0 }); // [1, 3, 5, 7]
const divideByThree = filter(numbers, (n) => { return n % 3 === 0 }); // [3, 6, 9]