// // let clickMe = document.getElementById("click-me")


// // function printMe() {
// //     console.log("printed")
// // }


// // clickMe.addEventListener("click", printMe)

// // function log() {
// //     console.log("Hello World")
// // }

// // window.setTimeout(log, 1000)


// // function printDate() {
// //     let now = new Date()
// //     let timer = document.getElementById("timer")
// //     timer.innerText = now
// // }

// // window.setInterval(printDate, 2000)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function filter(numbers, callback) {
//     let results = []
//     for (let i = 0; i = numbers.length; i++) {
//         if (callback(numbers[i])) {
//             results.push(numbers[i])
//         } else {
//             break
//         }
//     }
//     return results
// }

// function even(n) {
//     return n % 2 === 0
// }

// function odd(n) {
//     console.log(n % 2 !== 0)
// }

// function odder(n) {
//     console.log(n % 3 === 0)
// }

// // let even = filter(numbers, (n) => { return n % 2 === 0 })
// console.log(filter(numbers, even()))
// // let odds = filter(numbers, (n) => { return n % 2 !== 0 })
// // filter(numbers, odd)
// // let odder = filter(numbers, (n) => { return n % 3 === 0 })
// // filter(numbers, odder)