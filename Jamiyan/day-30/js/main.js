console.log("day-30");

const contacts = {
    name: `Jim`,
    familyName: `Dune`,
    age: 22
}
console.log(contacts.name);

let { name, familyName, age } = contacts;
console.log(familyName);

let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score)
}

// Example 1
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);
console.log(index); // 2
// Example 2
let rankS = [1, 5, 7, 8, 10, 7];
let indeX = rankS.findIndex(
    (ranK, indeX) => ranK === 7 && indeX > 2);
console.log(indeX); // 5

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
}
show('one', 'two', 'three', 'four', 'five', 'six')

//Spread operator
let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2);

// class Person {
//     constructor(name) {
//     this.name = name;
//     }
//     }
//     const person1 = new Person('John');
//     console.log(person1.name); // John

class Animal {
    constructor(species, color, age) {
        this.color = color;
        this.species = species;
        this.age = age;
    }
}
const horse = new Animal("horse", "brown", 3);
console.log(horse);
