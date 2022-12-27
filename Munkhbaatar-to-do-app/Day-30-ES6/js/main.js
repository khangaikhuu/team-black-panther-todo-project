console.log('Day - 30')

const contacts = {
    name: 'Jim',
    familyName: 'Dune',
    age:22
}

console.log(contacts.name);

// ES6 Object destructing

let {name, familyName, age} = contacts;
console.log(familyName);


let scores = [80, 90, 70];

for(let score of scores) {
    score = score + 5;
    console.log(score); //85, 95, 75
}


// Example 1
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex(rank1 => rank1 === 7);
console.log(index1); // 2

// console.log(ranks1.find((e) => e === 10))

// Example 2
let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex(
(rank2, index2) => rank2 === 7 && index2 > 2
);
console.log(index2); // 5



function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
    }
    show('one', 'two', 'three', 'four', 'five', 'six')



let arr1 = ['one', 'two'];
let arr3 = ['three', 'four', 'five']
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2);
["one", "two", "three", "four", "five"]

// main difference is the arr2 is changed in Spread operator. 


console.log(arr1.concat(arr3));
// console.log(arr1 + arr3);
console.log(arr1);
console.log(arr3);


class Person {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const anna = new Person('Anna', 12, 'female');
console.log(anna);

// Animal гэдэг  class үүсгээд тухайн animal нь race, color
// age утгуудыг constructor дотроо агуулсан байдлаар харуулна уу.

class Animal {
    constructor (species, color, age) {
        this.species = species;
        this.color = color;
        this.age = age;
    }
}

const horse = new Animal('Horse', 'white', '5')
const eagle = new Animal('bird', 'black', '3')
const fish = new Animal('fish', 'red', '3')

console.log(horse);
console.log(eagle);
console.log(fish);


