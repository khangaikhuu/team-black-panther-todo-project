console.log('CallBack JS');

let button = document.getElementById("click-me");
console.log(button);

function ClickMe() {
    console.log('click me');
}
button.addEventListener('click', ClickMe)

function log() {
    console.log('Hello World');
}
window.setTimeout(log, 1000);

console.log('=========================');
function printDate() {
    let now = new Date();
    let shortDate = presentTime.getFullYear()

    // let shortDate = ' Он cар өдөр  ' + presentTime.getFullYear() + ' - ' + presentTime.getMonth() + ' - ' + presentTime.getDate();


    let newDate = document.getElementById('timer').innerHTML = shortDate

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

let n = numbers
function evenFunc (n){
    return n % 2 === 0;
} 

function oddsFunc (n){ 
    return n % 2 !== 0 
}
function divideFunc (n){ 
    return n % 3 === 0 
}



const evens = filter(numbers, evenFunc ); // [2, 4, 6, 8]
    console.log(evens);

const odds = filter(numbers, oddsFunc); // [1, 3, 5, 7]
    console.log(odds);

const divideByThree = filter(numbers, divideFunc); // [3, 6, 9]
console.log(divideByThree);


