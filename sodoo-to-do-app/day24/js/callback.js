console.log('-----Callback JS---------');

let button = document.getElementById('click-me');

console.log(button);

button.addEventListener('click', clickMe)

function clickMe() {
    console.log('click me');
}


function log() {
    console.log('Hello World');
}



window.setTimeout(log, 3000);

window.setInterval(printDate, 1000)

function printDate() {
    document.getElementById('text').innerHTML = new Date;

}





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

function findEven(n) {
    return n % 2 === 0;
}


function findOdds(n) {
    return n % 2 !== 0
}


function find(n) {
    return n % 3 === 0
}



const evens = filter(numbers, findEven) // [2, 4, 6, 8]
const odds = filter(numbers, findOdds); // [1, 3, 5, 7]
const divideByThree = filter(numbers, find); // [3, 6, 9]

console.log(evens);
console.log(odds);
console.log(divideByThree);