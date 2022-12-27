console.log('day-30')

// object destruction
const contacts = {
    name: 'Jim',
    familyName: "Dune",
    age: 22
}

console.log(contacts.name)

let {name, familyName, age} = contacts;
console.log(familyName);

// for ... of loop

let scores = [80, 90, 70];

for (let score of scores){
    score = score + 5;
    console.log(score);  // 85, 95, 75
}


// arrat findindex() method
// example 1 
let ranks1 = [1, 5, 7, 8, 10, 7]
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1);  // 2



// example 2
let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex(
    (rank, index) => rank === 7 && index > 2
); 
console.log(index2) // 5


// rest parameter

function show(a, b , ...args){
    console.log(a); // one
    console.log(b); // two
    console.log(args);  // ['three', 'four', 'five', 'six']
}

show("one", 'two', 'three', 'four', 'five', 'six')

// 

let arr1 = ['one', 'two']
let arr3 = ['three', 'four', 'five']
// let arr2 = [...arr1, 'three', 'four', 'five']
// console.log(arr2);

console.log(arr1.concat(arr3))

// classes  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const anna = new Person ('Anna', 25, "Female");
console.log(anna)

// Animal gedeg class uusgeed tuhain animal ni species, color, age 
// utguudig constructor dotroo aguulsan baidlaar haruulna uu

class Animal {
    constructor(species, color, age){
        this.species = species;
        this.color = color;
        this.age = age;
    }
  
}

const horse = new Animal ("Horse", "Brown", 3);
const fish = new Animal ('Fish', "Blue", 2);
const eagle = new Animal ("Eagle", "Dark brown", 2)

console.log(horse)
console.log(fish)
console.log(eagle)


// Promise and Callback





