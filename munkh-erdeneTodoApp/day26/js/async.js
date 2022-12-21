console.log('async');


async function tryEgg(){
    return 1;
}
console.log(tryEgg());

async  function printMyEgg(){
   const result= await tryEgg();
    console.log(result);
    
}
console.log(printMyEgg());

async function tryEgg2(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('done')
            
        , 1000);
    });

    let result=await promise;
    console.log(result);
}
console.log('a');
console.log('b');







 
 
 