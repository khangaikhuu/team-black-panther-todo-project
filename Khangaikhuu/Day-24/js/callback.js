console.log('callback js')

let button = document.getElementById('click-me');
console.log(button);

function clickMe() {
    console.log('click me');
}

button.addEventListener('click', clickMe)

function log(){
    console.log('Hello World');
}

window.setTimeout(log, 3000);

// printDate гэдэг функц бичнэ
// энэ функц нь одоо цагийг үүсгээд тэгээд HTML 
// p элемент дотор харуулна
function printDate(){
    let now = new Date();
    let timer = document.getElementById('timer');
    timer.innerHTML = now;
}


window.setInterval(printDate, 2000);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
function filter(numbers, callback) {
	let results = [];

	for (let i=0; i < numbers.length; i++) {
		if (callback(numbers[i])) {
			results.push(numbers[i]);
		}
	}   
	return results;
}

function oddFunc(n) {
    return n % 2 !== 0;
}



function evenFunc(n){
    return n % 2 === 0;
}



function divideBy3Func(n){
    return n % 3 === 0;
}


const evens = filter(numbers, evenFunc) // [2, 4, 6, 8]
console.log(evens)

const odds = filter(numbers, oddFunc); // [1, 3, 5, 7]
console.log(odds)


//








const divideByThree = filter(numbers, divideBy3Func); // [3, 6, 9]

