console.log("callback");

let btn = document.getElementById("click-me");
console.log(btn);

function clickMe() {
    console.log("click me")
}

btn.addEventListener("click", clickMe)

function log() {
    console.log("hello world")
}

window.setTimeout(log, 3000);


function printDate() {
    let now = new Date();
    let para = document.getElementById("timer");
    para.innerHTML = (now);
}

window.setTimeout(printDate, 5000);

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
function oddsFunc(n) {
    return n % 2 !== 0;
}
function divFunc(n) {
    return n % 3 === 0;
}

const evens = filter(numbers, evenFunc);
console.log(evens);

const odds = filter(numbers, oddsFunc);
console.log(odds);

const divide = filter(numbers, divFunc);
console.log(divide);


