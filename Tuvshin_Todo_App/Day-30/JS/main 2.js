console.log(' Day 30');

const contacts = {
    name: 'Jim',
    familyName: 'Dune',
    age: 22
}
console.log(contacts.name);

let { name, familyName, age } = contacts;
console.log(familyName);

let scores = [80, 90, 70];
for (let score of scores) {
    score = score + 5;
    console.log(score); // 85, 95, 75
}


let ranks1 = [1, 5, 8, 8, 10, 7];
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1); // 2

// Example 2
let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex(
    (rank, index) => rank === 7 && index > 2
);
console.log(index2); // 5


// rest parametr

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
}

show('one', 'two', 'three', 'four', 'five', 'six')


// spreed operator

let arr1 = ['one', 'two'];
let arr3 = ['three', 'four', 'five'];
// let arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2);
console.log(arr1.concat(arr3));

// classes

class Person {
    constructor(name) {
        this.name = name;
    }
}

const anna = new Person('Anna');
console.log(anna);


// class animal gej hev format uusgeed door 
// horse gj shineer class uusgej bga

class animal {
    constructor(species, color, age) {
        this.species = species;
        this.color = color;
        this.age = age;
    }
}
const horse = new animal('horse', 'brown', 3)
console.log(horse);






// const person1 = new Person('John');
// console.log(person1.name); // John