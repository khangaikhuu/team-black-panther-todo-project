// console.log('Call back JS');

// let button = document.getElementById('click-me');

// function clickMe() {
//     console.log('Click Me');

// }
// button.addEventListener('click', clickMe);

// function log(){
//     console.log('Hello World');
// }

// window.setTimeout(log, 3000);

// let timer = document.getElementById('timer');

// function printDate(){
//     now = new Date();
//     timer.innerHTML = now;
// }

// window.setInterval(printDate, 1000);

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

function evensFunc(num) {
  return num % 2 === 0;
}

function oddsFunc(num) {
  return num % 2 !== 0;
}

function divideFunc(num) {
  return num % 3 === 0;
}

// const evens = filter(numbers, (n) => {return n%2 === 0});

const evens = filter(numbers, evensFunc);
console.log(evens);

const odds = filter(numbers, oddsFunc);
console.log(odds);

const divideByThree = filter(numbers, divideFunc);
console.log(divideByThree);
