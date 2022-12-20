console.log('callback js');

let button = document.getElementById('clickMe');

console.log(button);

function clickMe() {
    console.log('click me');
}

button.addEventListener('click', clickMe);

function log() {
    console.log('Hello World');
}

window.setTimeout(log, 3000);

function printDate() {

    let now = new Date()
    let myTimer = document.getElementById('date');

    // let fullYear = now.getFullYear()
    // let month = now.getMonth() + 1
    // let day = now.getDate()


    // myTimer.innerHTML = `Он сар өдөр: ${fullYear}-${month}-${day}`
    myTimer.innerHTML = now
    console.log(myTimer);
}

// window.setInterval(printDate, 2000);




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
    return n%2 ===0;
}

function oddFunc(n) {
    return n%2 !==0;
}

function dividedBy3Func(n) {
    return n%3 ===0;
}


const evens = filter(numbers, evenFunc); // [2, 4, 6, 8]
const odds = filter(numbers, oddFunc); // [1, 3, 5, 7]
const dividedByThree = filter(numbers, dividedBy3Func); // [3, 6, 9]

console.log(evens);
console.log(odds);
console.log(dividedByThree);