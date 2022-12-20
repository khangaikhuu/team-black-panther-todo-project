console.log("Js callback");


let button = document.getElementById("clickme");

console.log(button)
function clickMe(){
    console.log(clickMe);
}

button.addEventListener("click" , clickMe)


function log (){
    console.log("hello world")
}

window.setTimeout(log, 3000);

// printDate gedeg funkts bichne
// ene funkts n odoo tsagiig uusgeed tegeed html r element dotor haruulna

window.setInterval(log , 2000);


function printDate(){
    let now = new Date();
    let p = document.getElementsByTagName("p")[0]
    p.innerHTML = now
    
}
printDate();

window.setInterval(printDate , 1000);


let numbers =[1,2,3,4,5,6,7,8,9];

function filter (numbers,callback){
    let result = [];
    for(let i =0 ; i < numbers.length; i++){
        if(callback(numbers[i])){
            result.push(numbers[i]);
        }
    }
    return result;
}
function evenFunc(n){
    return n % 2 === 0
}

const evens = filter(numbers,evenFunc);
// const odds = filter(numbers,oddsFunc);
// const divideByThree = filter(numbers,divideFunc);


console.log(evens);



