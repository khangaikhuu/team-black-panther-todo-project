console.log("callback js");

let button = document.getElementById("clickMe");

console.log(button);

function clickMe(){
    console.log("click me");
}

button.addEventListener("click", clickMe);

function log(){
    console.log("hello world");
}
window.setTimeout(log, 3000);

function printDate(){
    let now = new Date();
    let p = document.getElementById("p");
    p.innerHTML = now;
}

window.setInterval(printDate, 2000);



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers, callback){
    let results = [];
    for(let i = 0; i < numbers.length; i++){
        if(callback(numbers[i])){
            results.push(numbers[i]);
        }
    }
    return results;
}

function evenFunc(n){
    return n % 2 === 0;
}
function oddFunc(n){
    return n % 2 !== 0;
}
function divideBy3Func(n){
    return n % 3 === 0;
}

const evens = filter(numbers, evenFunc);
console.log(evens);
const odds = filter(numbers, oddFunc);
console.log(odds);
const divideByThree = filter(numbers, divideBy3Func);
console.log(divideByThree);


