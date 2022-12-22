console.log("day26")

let promiseFulfilled = false ;

let changingVariavble;
console.log(changingVariavble);

const myPromise = new Promise((resolved, rejected)=>{
    if(promiseFulfilled){
        resolved("Promise is full filled");
    }else{
        rejected("Promise is not full filled")
    }
})

myPromise.then(result =>{
    console.log(result)
}).catch (e => {
    console.log(e)
})



console.log("a");
console.log("b");
console.log("c");

setTimeout(()=>{
    for(let i = 0 ; 0 < 1_000_000; i++){
        for(let j = 0 ; j<1_000_000 ; j++){
    
        }
    }
    
},5000)

console.log("final")

