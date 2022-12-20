console.log('callback js')

let button = document.getElementById('click-me')
console.log(button)

function clickMe() {
    console.log('click-me')
}

button.addEventListener('click', clickMe)

function log() {
    console.log('hello world')
}

window.setTimeout(log, 3000)



// function printDate() {
//     let now = new Date()
//     let timer = document.getElementById('timer')
//     timer.innerHTML = now
// }

// printDate()

// window.setInterval(printDate, 2000)


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function filter(numbers, callback) {
//     let results = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (callback(numbers[i])) {
//             results.push(numbers[i]);
//         }
//     }
//     return results;
// }

// function evenFunc(n){
//     return n % 2 === 0
// }

// function oddFunc(n) {
//     return n % 2 !== 0
// }
// function divideBy3Func (n) {
//     return n % 3 === 0
// }


// const evens = filter(numbers, evenFunc) // [2, 4, 6, 8]
// console.log(evens)

// const odds = filter(numbers, oddFunc); // [1, 3, 5, 7]
// console.log(odds)
// const divideByThree = filter(numbers, divideBy3Func); // [3, 6, 9]
// console.log(divideByThree)









console.log('exercises')

let arrays = [1, 2, 3, 4, 5, 6, 7, 8]

function addition(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback[i]
}

function addTwo(n) {
    return n + 2
}

console.log(addition(arrays, addTwo))