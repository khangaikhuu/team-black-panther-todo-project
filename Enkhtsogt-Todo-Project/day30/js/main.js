console.log("day-30")

const contacts = {
    name: "Jim",
    familyName: "Dune",
    Age: 22
}

console.log(contacts.name)

//ES6 Object destructing





// for (let score of scores){
//     score = score + 5;
//     console.log(score); // 85, 90 , 95 , 100
// }


//example 1
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1); //2

//example2

let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex(
    (rank, index)=> rank === 7 && index > 2
);
console.log(index2); //5

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
    }
    show('one', 'two', 'three', 'four', 'five', 'six')


    let arr1 = ['one', 'two'];
    let arr2 = [...arr1, 'three', 'four', 'five'];
    console.log(arr2);
    ["one", "two", "three", "four", "five"]

class Person{
    constructor(name){
        this.name = name;
    }
}

const anna = new Person("Anna");

console.log(anna);

// animal gedeg class uusgeed tuhain animal ni race, color
// age utguudiig constructor dotor aguulsan baidlaar haruulna uu

class Animal{
    constructor(race, color,age){
        this.race = race;
        this.color = color;
        this.age = age;
    }
}

const Dog = new Animal("Dog","Black","22")

console.log(Dog)