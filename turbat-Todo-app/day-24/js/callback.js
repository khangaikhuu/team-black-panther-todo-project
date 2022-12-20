// console.log("callback js");

// let button = document.getElementById("click-me");
// console.log(button)

// function clickMe() {
//     console.log("click me")
// }

// button.addEventListener("click", clickMe) 



// button.addEventListener("click", ()=> {

// function log () {
//     console.log("Hello World")
// }
// window.setTimeout(log, 1000);

// function printDate() {
//     let now = new Date();
//     console.log(now)
// }
// window.setInterval(printDate, 2000);


//     let input = document.createElement ("p");
//     input.innerHTML = `${printDate}`
// })




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
    return n%2===0;
}

function oddsFunc(n) {
    return n%2!==0
}

function divideByThreeFunc(n) {
    return n%3===0
}
// const evens = filter(number, (n)=> {return n%2===0})
// const odds = filter(number, (n)=> {return n%2!==0})
// const divideByThree = filter(number, (n)=> {return n%3===0})