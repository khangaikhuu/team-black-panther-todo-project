// add function

function add(x, y) {
    return x + y;
}

// print function

function print(f) {
    let x = 2, y = 3;
    console.log(f(x, y));
}

// callback function

print(add);



// setTimeout

let x = () => {
    console.log('arrow function');
}



setTimeout(x, 2000); // zaasan hugatsaanii daraa function ajillana

setTimeout(() => { console.log('arrow function'); }, 1000)




function startInterval() {
    let now = new Date;
    let myTimer = document.getElementById('myTimer')
    myTimer.innerHTML = 'Он сар өдөр' + ' ' + now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay();
}

setInterval(startInterval, 10);


document.getElementById('myTimer')