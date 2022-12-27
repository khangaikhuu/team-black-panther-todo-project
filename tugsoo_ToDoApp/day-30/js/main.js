console.log("day-30");

const contacts = {
    name: "Jim",
    familyName: "Dune",
    age: 22
}

console.log(contacts.name);

//ES6 object destructing

let { name, familyName, age } = contacts;
console.log(familyName);


let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}


// Example 1
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1); // 2

console.log(ranks1.find((e) => e === 7));


// Example 2
let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex(
    (rank, index) => rank === 7 && index > 2
);
console.log(index2); // 5


//rest parameter

function show(a, b, ...args) {  //array 
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
}
show('one', 'two', 'three', 'four', 'five', 'six')



// spread operator

let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2);
["one", "two", "three", "four", "five"]



// classes ---- hev uusgej bgaa gsn utgatai

class Person {
    constructor(name,age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const anna = new Person("Anna",40, 'female')

// const person1 = new Person('John');
console.log(anna); // Anna

// example

class Animal {
    constructor(species, color, age){
        this.species = species;
        this.color = color;
        this.age = age;
    }
}

const horse = new Animal('Horse','brown', 3)
const Eagle = new Animal("Eagle", 'black', 2)
const Fish = new Animal("Fish")

console.log(horse);
console.log(Eagle);
console.log(Fish);
