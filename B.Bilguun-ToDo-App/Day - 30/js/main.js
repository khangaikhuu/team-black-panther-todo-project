console.log('Day - 30');

const contacts = {
    name: 'Jim',
    familyName: 'Dune',
    age: 22
}

console.log(contacts.name);

// ES6 Object destructing

let {name, familyName, age} = contacts;
console.log(familyName);

let scores = [80, 90 , 100]

for ( let score of scores) {
    score = score + 5; 
    console.log(score);

}


// Array FINDINDEX(). METHOD

let ranks1 = [1,5,7,8,10,7];
let index1 = ranks1.findIndex(rank => rank ===7);
console.log(index1); //2

// console.log(ranks1.find());1

//example 2 
let ranks2 = [1,5,7,8,10,7];

let index2 = ranks2.findIndex(
    (rank,index) => rank === 7 && index > 2
);
console.log(index2); // 5

function show(a,b, ...args){
    console.log(a);
    console.log(b);
    console.log(args);
}

const arr = []
show('one', 'two' , 'three','four', 'five')

// Spread operator - most use

let arr1 = ['one', 'two'];
let arr2 = ['three','four','five'];

console.log(arr2);

// Classes

class Person {
    constructor(name){
        this.name = name;
    }
}



const anna = new Person('Anna');
console.log(anna);

class Animal {
    constructor(race,color,age){
        this.race = race;
        this.color = color;
        this.age = age;
    }
}

const dog = new Animal('mongol banhar','black',4)


const horse = new Animal('BlackHorse' , 'Greenzebra',10);
const eagle = new Animal('ZA medkue','Brown',2);
const fish = new Animal('Taagaarai','golden',1);


console.log(dog);
console.log(horse);
console.log(eagle);
console.log(fish);

