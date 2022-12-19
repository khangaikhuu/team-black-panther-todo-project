console.log("callback");

// let button = document.getElementById("click-me");
// console.log(button);

// function clickMe(){
//     console.log("click me");
// }
// button.addEventListener("click", clickMe)

// function log(){
//     console.log("Hello World");
// }
// window.setTimeout(log, 5000);

// let timer = document.getElementById("timer");
// function printDate (){
//     let now = new Date;
//     console.log(now);
//     timer.innerHTML = now;
// }
// window.setInterval(printDate, 2000);


let numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9];
function filter(numbers, callback){
    let results = [];
    for(let i = 0; i < numbers.length; i++){
        if(callback(numbers[i])){
            results.push(numbers[i]);
        }
    }
    return results;
}


function evenFunc(){
    for(let i = 0; i < numbers.length; i++){
        let result = "";
        if(numbers[i] % 2 === 0){
            result.push(numbers[i]);
        }
    }
    return result;

}
function evenFunc(n){
    return n % 2 === 0;
}

function oddFunc (n){
    return n % 2 !== 0;
}

function divideByThreeFunc(n){
    return n % 3 === 0;
}
const evens = filter(numbers, (evenFunc));
const odds = filter(numbers, (oddFunc));
const divideByThree = filter(numbers, (divideByThreeFunc));
console.log(evenFunc);
console.log(oddFunc);
console.log(divideByThreeFunc);

