console.log('Callback js')

let button = document.getElementById('click-me');
console.log(button);

button.addEventListener('click', clickMe);

function clickMe () {
    console.log('click Me');
}


function log() {
    console.log('Hello World');
}

window.setTimeout(log, 3000);

// printDate гэдэг функц бичнэ
// энэ функц нь одоо цагийг үүсгээд тэгээд HTML 
// p element дотор харуулна

window.setInterval(printDate, 1000);

function printDate() {
    let currentDate = new Date();
    document.getElementById('date1').textContent = currentDate;
    document.getElementById('date2').innerHTML = currentDate;
    document.getElementById('date3').innerText = currentDate;
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter (numbers, callback) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {

        if (callback(numbers[i])) {
            results.push(numbers[i]);
        }
    }
    return results;
}

function evenFunc(n) {
    return n%2 === 0
}
function oddFunc(n) {
    return n%2 !== 2
}
function dividBy3Func(n) {
    return n%3 === 0
}


const evens = filter(numbers, evenFunc) // [2, 4, 6, 8]
const odds = filter(numbers, oddFunc); // [1, 3, 5, 7]
const divideByThree = filter(numbers, dividBy3Func); // [3, 6, 9]

console.log(evens);
console.log(odds);
console.log(divideByThree);


// const evens = filter(numbers, (n)=>{return n%2===0}) // [2, 4, 6, 8]
// const odds = filter(numbers, (n)=>{return n%2!==0}); // [1, 3, 5, 7]
// const divideByThree = filter(numbers, (n)=>{return n%3===0}); // [3, 6, 9]