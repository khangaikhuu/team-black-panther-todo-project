console.log("Callback JS");

let button = document.getElementById("click-me");
console.log(button);

function clickMe() {
  console.log("clickme");
}

button.addEventListener("click", clickMe);
function log() {
  console.log("Hello World");
}
window.setTimeout(log, 3000);

function printDate() {
  let now = new Date();
  let timer = document.getElementById("timer");
  timer.innerHTML = now;
}
window.setInterval(printDate, 2000);

//array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers, callback) {
    let results = [];
    for(let i = 0; i < numbers.length; i++){
        if(callback(numbers[i])){
            results.push(numbers[i]);
        }
    }
    return results;
}
function evenFunc(n){
    return n % 2 ===0;
}
function oddFunc(n){
    return n % 2 !== 0;
}
function threeFunc(n){
    return n % 3 === 0;
}
const evens = filter(numbers , evenFunc)
const odds = filter(numbers, oddFunc);
const oddds = filter(numbers, threeFunc);
console.log(evens) 
