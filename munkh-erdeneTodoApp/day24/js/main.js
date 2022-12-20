//callback n iftei tostei ghde negl udaa davtah bolomjtoi


// console.log('DAY-24');
// function greeting(name) {
//     alert(`Bonjour, ${name}`);

// }
// function greetings(callback) {
//     const name = prompt('pls give me your name.');
//     callback(name);

// }
// greetings(greeting);


// console.log('this is goood result');
// let button= document.getElementById('click');
// console.log(button);
// function clickMe() {
// console.log('click')    ;

// }
// button.addEventListener('click',clickMe)
// function log() {
//     console.log("hello");

// }
// function prinDate(params) {
//     let now=newmra

// }
// window.setInterval(prinDate,2000);




//btn
function log(){
    console.log('Hello world');
    }
    const btn = document.querySelectorAll('button')[0];
    btn.addEventListener('click', log)







    
// array hussneeree shuuh
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
function evenfunc(n){
    return n%2===0;
}
function oddfunc(n){
    return n%2!==0;
}
function huvaagddagg(n){
    return n%3===0;
}

const evens = filter(numbers, evenfunc)// [2, 4, 6, 8]
console.log(evens);
const odds = filter(numbers,oddfunc); // [1, 3, 5, 7]
console.log(odds);
const huvaagddag = filter(numbers, huvaagddagg);
console.log(huvaagddag); // [3, 6, 9]


