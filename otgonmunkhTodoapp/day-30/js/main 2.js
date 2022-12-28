const contacts = {
    name: "Jim",
    familyName: "Dune",
    age: 22
}

console.log(contacts.name);
 
//variable zarlaj bolno
let {name, familyName , age} = contacts;
console.log(familyName);

// let score = [80, 90, 70];
// for(let score of scores){
//     score = score + 5;
//     console.log(score);
// }

let ranck1 = [1, 5, 7, 8, 10, 7];
let index1 = ranck1.findIndex(rank => rank === 7);
console.log(index1); //2

// console.log(rank1.find((e) => e === 7));

let ranck2 = [1, 5, 7, 8, 10, 7];
let index2 = ranck2.findIndex(
    (rank, index) => rank === 7 && index > 2
);
console.log(index2);

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
    }
const arr = []
    show('one', 'two', 'three', 'four', 'five', 'six')

//spread operator
let arr1 = ['one', 'two'];
let arr3 = ['three', 'four', 'five']
let sum = arr1.concat(arr3);
console.log(sum);


// let arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2);
// ["one", "two", "three", "four", "five"]

//classes 
class Person {
    constructor(name) {
    this.name = name;
    }
    }
    const person1 = new Person('John');
    console.log(person1.name); // John
    const anna = new Person('Anna');
    console.log(anna.name);

class Animal {
    constructor(species, color, age){
        this.species = species;
        this.color = color;
  
        this.age = age;
    }
 
        
   

}
const horse = new Animal('Horse', 'brown', 3);
console.log(horse.species);
console.log(horse.color);
console.log(horse.age);
console.log(horse);


