console.log("async, await");

//Promise
let promiseFulfilled = true;
let changingVariable;
console.log("first");
console.log(changingVariable);
console.log("first");
const myPromise = new Promise((resolved, rejected) => {
  if (promiseFulfilled) {
    changingVariable = "Promise is fulfilled";
    resolved(changingVariable);
  } else {
    rejected("Promise isnt fulfilled");
  }
});

myPromise
  .then((result) => {
    console.log("third");
    console.log(result);
    console.log("third");
  })
  .catch((e) => {
    console.log(e);
  });

console.log("fourth");
console.log(changingVariable);
console.log("fourth");

//async
console.log("a");
console.log("b");
console.log("c");
setTimeout(() => {
  for (let i = 0; i < 1_000_000; i++) {
    for (let j = 0; j < 1_000_000; j++) {}
  }
},5000);
console.log("final");
