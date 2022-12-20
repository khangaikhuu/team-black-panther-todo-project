console.log('======Day 25==========');

let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let text4 = document.getElementById('text4')

let timer1 = Number(Math.floor(Math.random() * 5000) + 1);
let timer2 = Number(Math.floor(Math.random() * 5000) + 1);
let timer3 = Number(Math.floor(Math.random() * 5000) + 1);
let timer4 = Number(Math.floor(Math.random() * 5000) + 1);

// console.log(timer1);
// console.log(timer2);
// console.log(timer3);
// console.log(timer4);

function printMeToDom(text, element) {
    element.innerHTML = text;
}


setTimeout(() => {
    printMeToDom('Зураг авах', text1);
    setTimeout(() => {
        printMeToDom('Амжилттай бол зургийг өөрчлөх', text2);
        setTimeout(() => {
            printMeToDom('Амжилттай бол амжилттай хадгалах', text3);
            setTimeout(() => {
                printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа"', text4);
            }, timer4);
        }, timer3);
    }, timer2);
}, timer1);









