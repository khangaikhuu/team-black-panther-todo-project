console.log("callback js");

let button = document.getElementById("click-me");

console.log(button);

function clickMe () {
    console.log("click me ")
}

button.addEventListener("click", clickMe);


function log () {
    
    console.log("Hello world")
}
 
window.setTimeout(log, 1000);

window.setInterval(log, 2000);

//  printDate gedeg punkts bichne
// ene punkts ni odoo tsagiig uusgeed tegeed HTML
// p element dotor haruulna 


function printDate () {
    let now = new Date()
    let timer = document.getElementById("timer");
    timer.innerHTML = (now)
}


window.setInterval(printDate, 2000)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenFunc (n) {
    return n % 2 ===0;
}
function oddFunc(n) {
    return n % 2 !== 0;
}
function divideBy3Func (n) {
    return n % 3 === 0 ;
}



function filter(numbers, callback) {
    let results = []; 
    for (let i = 0; i < numbers.length; i++){
        if(callback(numbers[i])){
            results.push(numbers[i]);
        }
    }
    return results;
}


const evens  = filter(numbers, evenFunc);
console.log(evens)
const odds  = filter(numbers, oddFunc);
console.log(odds)
const divideByThree  = filter(numbers, divideBy3Func);
console.log(divideBy3Func)



// const evens = filter(numbers, (n) =>{return n % 2 === 0})
// const odds = filter(numbers, (n) =>{return n % 21 === 0})
// const divideByThree = filter(numbers, (n) =>{return n % 3 === 0})


