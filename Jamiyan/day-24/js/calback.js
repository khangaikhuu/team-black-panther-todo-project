console.log('callback js');

let button = document.getElementById("click-me");

function clickMe() {
    console.log('click me');
}

button.addEventListener("click", clickMe);
function log() {
    console.log("Hello World");
}
setTimeout(log, 3000);



function printDate() {
    let now = new Date()
    document.getElementById("date").innerHTML = now;
}
setInterval(printDate, 1000);


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

console.log(filter(numbers, evenFunc))
function evenFunc(n){
    return n % 2 ===0;
}

function oddFunc(n){
    return n % 2 !== 0;
}

function divideByThreeFunc(n){
    return n % 3 ===0;
}

const evens = filter(numbers, (n) => { return n % 2 === 0 }) // [2, 4, 6, 8]
const odds = filter(numbers, (n) => { return n % 2 !== 0 }); // [1, 3, 5, 7]
const divideByThree = filter(numbers, (n) => { return n % 3 === 0 }); // [3, 6, 9]
