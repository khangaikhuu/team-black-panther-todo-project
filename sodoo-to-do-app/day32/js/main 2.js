console.log('-------------day-30 ES6 ---------------');

const contacts = {
    name: 'Jim',
    familyName: 'Dune',
    age: 22
}

console.log(contacts.name);

// ES6 Object destructing

let { name, familyName, age } = contacts;
console.log(familyName);



let scores = [80, 90, 70]

for (let score of scores) {
    score = score + 5;
    console.log(score); //
}


let ranks1 = [1, 5, 7, 8, 10, 7];

let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1);


let ranks2 = [1, 5, 7, 8, 10, 7];

let index2 = ranks2.findIndex(
    (rank, index) => rank === 7 && index > 2
);
console.log(index2);




// function show(a, b, ...args) {
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }



// show('one', 'two', 'three', 'four', 'five')



let arr1 = ['one', 'two'];
let arr3 = ['three', 'four', 'five']

let arr2 = [...arr1, 'three', 'four', 'five']
console.log(arr2);

// console.log(arr1.concat(arr3));
// console.log(arr1);
// console.log(arr3);


class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}

const person1 = new Person('John', 10, 'male');
console.log(person1);
const anna = new Person('Anna', 20, 'female');
console.log(anna);


// Animal  = race, color, 
//

class Animal {
    constructor(species, color, age) {
        this.species = species;
        this.color = color;
        this.age = age
    }
}


const horse = new Animal('Horse', 'Brown', 3)
const eagle = new Animal('Burged', 'har', 5)
console.log(horse);
console.log(eagle);


