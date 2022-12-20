let x = document.getElementById('p1');
let y = document.getElementById('p2');
let z = document.getElementById('p3');
let c = document.getElementById('p4');

let timer1 = Math.floor(Math.random() * 3000);
let timer2 = Math.floor(Math.random() * 3000);
let timer3 = Math.floor(Math.random() * 3000);
let timer4 = Math.floor(Math.random() * 3000);

function printMeToDom (str,ran){
    ran.innerHTML = str;
}

function first(){
    let firstPromise = new Promise((resolve,reject) => {
     setTimeout(()=> {
            resolve(printMeToDom('Зураг авах',x))
    } ,timer1);
    });
    return firstPromise;
}

function second(){
    let secondPromise = new Promise((resolve,reject) => {
        setTimeout(()=> {
           resolve( printMeToDom('Амжилттай бол зургийг өөрчлөх',y))
        } ,timer2);
    });
    return secondPromise;
}

function third(){
    let thirdPromise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(printMeToDom('Амжилттай бол хадгалах',z))
        } ,timer3);
    });
    return thirdPromise;
}

function fourth(){
    let fourthPromise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэлэх',c))
        } ,timer4);
    });
    return fourthPromise;
}

first()
.then(firstPromise => second())
.then(secondPromise => third())
.then(thirdPromise => fourth())

