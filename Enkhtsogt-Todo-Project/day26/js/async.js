async function fryEgg(){
    return 1;
}

console.log(fryEgg())


async function printMyEgg(){
    const result = await fryEgg();
    console.log(result)
}
console.log(printMyEgg())


async function addElementsToDom(command, element, timer) {
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
  const printOne = await addElementsToDom('Зураг авах', p1, timer1)
  const printTwo = await addElementsToDom('Амжилттай бол зургийг өөрчлөх', p2, timer2)
  const printThree = await addElementsToDom('Амжилттай бол амжилттай хадгалах', p3, timer3)
  const printFour = await addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4, timer4)
 
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


