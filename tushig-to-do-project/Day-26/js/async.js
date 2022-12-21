console.log(`--------async------------------------->`)

async function fryEgg () {
    return 1;
}

console.log(fryEgg)


async function printMyEgg () {
    const result = await fryEgg();
    console.log(result);
}


console.log(printMyEgg())

async function fryEgg2() {
    let promise = new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`Done!`), 1000)
    });
    // promise.then(result => {
    //     console.log(result)
    // })

    let result = await promise; // end 1 second hvleegdene
    console.log(result)
}

console.log(`a`);
console.log(`b`);
fryEgg2();
console.log(`Final`);




// async awai promise >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
console.log(`async await promise ------------>`)

const p1 = document.getElementById('msg1');
const p2 = document.getElementById('msg2');
const p3 = document.getElementById('msg3');
const p4 = document.getElementById('msg4');
const p5 = document.getElementById('error');


const timer1 = Math.floor(Math.random() * 1000);
const timer2 = Math.floor(Math.random() * 1000);
const timer3 = Math.floor(Math.random() * 1000);
const timer4 = Math.floor(Math.random() * 1000);


function printMeToDom(value, element) {
    element.innerHTML = value;
}

function addElementsToDom(command, element, timer) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                printMeToDom(command, element)
                resolve(command)
            } else {
                reject('Алдаа гарлаа')
            }
        }, timer)
    })

    return promise;
}

async function printDom() {
   const printOne = await addElementsToDom('1. Зураг авах', p1, timer1)
   const printTwo = await addElementsToDom('2. Амжилттай бол зургийг өөрчлөх', p2, timer2)
   const printThree = await addElementsToDom('3. Амжилттай бол амжилттай хадгалах', p3, timer3)
   const printFour = await addElementsToDom('4. Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4, timer4)

   console.log(printOne);
   console.log(printTwo)
   console.log(printThree)
   console.log(printFour)
}

printDom()



const printDomExp = async function (){
    const printOne = await addElementsToDom('Зураг авах', p1, timer1)
}


const printDomExpArrow = async () => {
    const printOne = await addElementsToDom('Зураг авах', p1, timer1)
}


