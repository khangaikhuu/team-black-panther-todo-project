console.log("Day26");

//promise iin dadlaga 
let promiseFulfilled= true;
let changing;
console.log(changing);
const myPromise = new Promise((resolved,rejected)=>{
    if(promiseFulfilled){
        changing=" its correct"
        resolved(changing);
    }
    else{
        rejected('not given');
    }
})
myPromise.then(result=>{
    console.log(result);
}).catch(e=>{
    console.log(e);
})



//ASYNC begin 
console.log('a');
console.log('b');
console.log('c');
setTimeout(() => {
for(let i =0; i<1_000_000;i++){
    for(let j =0; j<1_000_000;j++){
    }
}
}, 3000);
console.log("final");