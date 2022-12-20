let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")

let timer1 = Math.ceil(Math.random() * 5000)
let timer2 = Math.ceil(Math.random() * 5000)
let timer3 = Math.ceil(Math.random() * 5000)
let timer4 = Math.ceil(Math.random() * 5000)

function printMeToDom(x, y) {
    y.innerHTML = x
}

setTimeout(() => {
    printMeToDom("Зураг авах", p1);
    setTimeout(() => {
        printMeToDom("Амжилттай бол зургийг өөрчлөх", p2);
        setTimeout(() => {
            printMeToDom("Амжилттай бол амжилттай хадгалах", p3);
            setTimeout(() => {
                printMeToDom("Амжилттай бол 'Амжилттай хадгалагдлаа' гэж хэвлэх", p4)
            }, timer4);
        }, timer3);
    }, timer2);
}, timer1);


