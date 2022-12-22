console.log("day-26");


let promiseFulfilled = true;

let changingVariable;
console.log("first");
console.log(changingVariable);
console.log("first");
const myPromise = new Promise((resolved, rejected) => {
   if(promiseFulfilled){

    // console.log("second");
   
    console.log(changingVariable);
    // console.log("second");
    resolved(changingVariable);

    
   } else{
    rejected("Promise is not full filled");
   }
})
myPromise.then(result => {
    changingVariable = "Promise is full filled";
    console.log("second");
    console.log(changingVariable);
    console.log("second");
    if(changingVariable !== undefined){
        console.log("its okey");
    }
    
}).catch(err => {
    console.log(err);
})

console.log("third");
console.log(changingVariable);


// myPromise.then(result => {
   
//     for(let i = 0; i < 1_000_000; i++){
//         for(let j = 0; j < 1_000_000; j++){
        
//         }
//     }

// }).catch(err => {
//     console.log(err);
// })
console.log("third");
console.log("a");
console.log("b ");
console.log("c");

setTimeout(() =>{
    

    for(let i = 0; i < 1_000_000; i++){
                for(let j = 0; j < 1_000_000; j++){
                
                }
            }
}, 5000)

console.log(final);



