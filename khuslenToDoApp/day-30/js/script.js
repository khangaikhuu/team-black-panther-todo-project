// let { name, familyName, age } = contacts;
// console.log(familyName);

let scores = [80, 90, 70]

for (let score of scores) {
    score = score + 5;
    console.log(score);
}

// Example 1

let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex((rank) => rank === 7)

console.log(index1);

// Example 2

let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex((rank, index)=> rank === 7 && index > 2);
console.log(index2);

// rest parameter


// spread operator bolon concat same but spread operator more useful

let arr1 = ["one" , "two"];
let arr3 = ["three", "four", "five"]
console.log(arr1.concat(arr3));

let arr2 = [...arr1, "three", "four", "five"];
console.log(arr2); 

// classes object orented programming class uusgeh arga

class Person {
    constructor(name) {
        this.name = name;
    }
}
const anna = new Person ("Anna", 12, "female")

class Animal {
    constructor(species, color, age) {
        this.species = species;
        this.color = color; 
        this.age = age;
    }
}

const lion = new Animal("Predator", "yellow", 14)
console.log(lion)

const horse = new Animal("4 legged standing beast", "brown red", 4)
console.log(horse)

