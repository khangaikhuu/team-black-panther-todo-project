document.getElementById('p1').innerHTML = "Pass away";
document.getElementById('p2').innerHTML = "pass out";
document.getElementById('p3').innerHTML = "Currently";
document.getElementById('p4').innerHTML = "These Days";

// let numbers=prompt();

//     for(let i=0; i<1000;i++){
//         console.log(Math.round(Math.random()*numbers));
//     }


const timer1 = Math.floor(Math.random() * 1000);
const timer2 = Math.floor(Math.random() * 1000);
const timer3 = Math.floor(Math.random() * 1000);
const timer4 = Math.floor(Math.random() * 1000);



function printMeToDom(value,element){
    element.innerHTML=value;
}


// //callback hell
// setTimeout(() => {
//     printMeToDom('Get image',first)
//     setTimeout(() => {
//         printMeToDom('Changed image', second)
//         setTimeout(() => {
//             printMeToDom('Saved image', thirth)
//             setTimeout(() => {
//                 printMeToDom('If it saved it , it would say "saved"', fourth)
//              }, timer4)
//          }, timer3);
//      }, timer2);
// }, timer1);



// ehnii tushalt
// const timers = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const timers=[timer1,timer2,timer3,timer4];
//         if(timers.length>0){
//             resolve(timers);
//         }
//         else{
//             reject("Noneeeee");
//         }
//     }, 1000);
// })
//  timers.then(result=>{
//      console.log(result)
//  })
//  .catch(error=> console.log(error))




// second  turshalt
// function callGetImage(command, element, timer) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (element !== undefined) {
//                 printMeToDom(command,element)
//                 resolve(command)
            
//             }
           
//             else {
//                 reject("warning somethinf is false");
//             }
//         }, 1000);
//     })
//     return promise;
// }
// addElementsToDom('Get img',p1,timer1)
// .then((second)=>addElementsToDom('chnge it',p2,timer2))
// .then((thirth)=>addElementsToDom('save it',p3,timer3))
// .then((fourth)=>addElementsToDom('can chnge it',p4,timer4))

// .catch(error=> addElementsToDom(error,p5,timer1))



















// async aar oorchlov 

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
 
 












