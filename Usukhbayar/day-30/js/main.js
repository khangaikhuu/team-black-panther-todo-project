console.log("day 30");

const contacts = {
  name: "Jim",
  familyName: "Dune",
  age: 22,
};
console.log(contacts.name);

//ES6 Object Destructing

let { name, familyName, age } = contacts;
console.log(familyName);
console.log(age);

let scores = [80, 90, 70];
for (let score of scores) {
  score = score + 5;
  console.log(score);
}
// Example 1
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex((rank) => rank === 7);
console.log(index1); // 2
// Example 2
let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex((rank, index) => rank === 7 && index > 2);
console.log(index2); // 5

function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}
show("one", "two", "three", "four", "five", "six");

let arr1 = ["one", "two"];
let arr3 = ["three", "four", "five"];

let arr4 = arr1.concat(arr3);
console.log(arr4);

// let arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2)

//object literal
// const obj = {
//   name: "Usk",
//   age: 40,
// };

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const anna = new Person("Anna", 12, 'Female');
console.log(anna)

class Animal{
    constructor(species, color, age){
        this.species = species;
        this.color = color;
        this.age = age; 
    }
}
const horse = new Animal('Horse', 'Brown', 3)
console.log(horse);
const eagle = new Animal('Eagle', 'Black', 4)
console.log(eagle);
