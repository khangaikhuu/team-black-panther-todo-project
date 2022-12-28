//ES6

const contacts = {
    name: 'Jim',
    familyName: 'Dune',
    age: 22
    }
let {name, familyName, age} = contacts;
console.log(familyName);

// FOR OF LOOP
// for (variable of iterable) {
//     // ...
//     }
//         let scores = [80, 90, 70];
//         for (let score of scores) {
//         score = score + 5;
//         console.log(score); // 85, 95, 75
//     }

//EXAMPLE 1
console.log(`EXAMPLE 1 -------------->`)

let ranks1 = [1, 5 ,7 ,8 , 10, 7];
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1); // 2  :7 toi tentsuu elementiig butsaana.



//EXAMPLE 2 array
console.log(`EXAMPLE 2 -------------->`)

let ranks2 = [1, 5 ,7 ,8 ,10, 7];
let index2 = ranks2.findIndex (
    (rank, index) => rank === 7 && index > 2 // index n 2 oos ih daraagiih n utgiig n uguuchee !!! aan okay 5 baina avna uu.
);
console.log(index2); // 5


// REST PARAMETR
console.log(`EXAMPLE 3 REST PARAMETR -------------->`)

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
    }
    show('one', 'two', 'three', 'four', 'five', 'six')

// SPREAD OPERATOR
console.log(`EXAMPLE 3 SPREAD OPERATOR -------------->`)

let arr1 = ['one', ' two '];
let arr3 = ['three', 'four', 'five'];
console.log("ehnii array" ,arr1);
console.log("daraagiin array" , arr3);

console.log("ehnii bolon daragin array iig niilulj neg array bolgoj bn" , arr1.concat(arr3));
// let arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2); // ["one", "two", "three", "four", "five"]


// CLASSES
console.log(`EXAMPLE 4 CLASSES -------------->`)
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    const person1 = new Person('Tushig');
    console.log(person1.name); // Tushig

// CLASSES DASGAL: - Animal gedeg class vvsgeed tuhain animal n species, color, age utguudiig
// constructor dotroo aguulsan baidlaar haruulna uu.
class Animal { // class n hew gesen ug : animal gedeg hew dotor ymnudig uguh ystoi
    constructor(species, color, age) {
        this.species = species;
        this.color = color;
        this.age = age
    }
}
const horse = new Animal('Horse' , 'Brown' , 3)
console.log(Animal) 

//  Promise and callback
console.log(`EXAMPLE 5 Promise and callback -------------->`)


