// function greeting (name) {
//     alert(`Hello, ${name}`);
// }

// function greetings (callback){
//     const name = prompt("Please enter your name");
//     callback(name);
// }

// greetings(greeting);

// let button = document.getElementById("click-me");
// console.log(button)

// button.addEventListener("click", clickMe);


// function log(){
//     console.log("hello World"    )
// }

// window.setTimeout(log, 4000);

// function clickMe(){
//     console.log("click me")
// }

// window.setInterval(log, 2000)

// function time() {
//     let now = new Date();
//     let timer = document.getElementById("time");
//     timer.innerHTML= now
// }
// time(0)


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
//     return n % 2 === 0 ;
// }

// function evenFunc(n){
//     return n % 2 !== 0 ;
// }

// function evenFunc(n){
//     return n % 3 === 0 ;
// }

// const evens = filter(numbers, (n) => { return n % 2 === 0 }) // [2, 4, 6, 8]
// const odds = filter(numbers, (n) => { return n % 2 !== 0 }); // [1, 3, 5, 7]
// // const odds = filter(numbers, (n)=>{return n%3===0}); // [3, 6, 9]

// console.log(evens);
// console.log(odds);


let arrays = [1,2,3,4,5,6,7,8];

function addition (arr, callback){
    let results = [];
    console.log(results)
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i]);
        results.push(arr[i]);
    }
    return results;
}

function addTwo (n) {
    return n + 2;
}

const last = addition(arrays, addTwo);
console.log(last);