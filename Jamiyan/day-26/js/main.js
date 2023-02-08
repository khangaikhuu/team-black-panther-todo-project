console.log("day-26");

let promisedFulfilled = true;
let changingVariable;
console.log(changingVariable);

const myPromise = new Promise((resolved, rejected) => {
  if (promisedFulfilled) {
    changingVariable = "Promise is fullfilled";
    resolved(changingVariable);
  } else {
    rejected("Promise is not full filled");
  }
});

myPromise
  .then((result) => {
    //.then hamgiin suuld hevlegddeg
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("a");
console.log("b");
console.log("c");
console.log("final");
