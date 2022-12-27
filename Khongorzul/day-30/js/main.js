const contacts = {
    name: "Jim",
    familyName: "Dune",
    age: 22,
}
console.log(contacts);

//Object Destructing
let {name, familyName, age} = contacts;
console.log(familyName);



//FOR LOOP OF
let scores = [80, 90, 70];
 for(let score of scores){
    score = score + 5;
    console.log(score);
}



//ARRAY 
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1);

//console.log(ranks1.find((e) => e === 10));

let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks1.findIndex(
    (rank, index)  => rank === 7 && index > 2
);
console.log(index2);



//REST PARAMETER
function show(a, b, ...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
show("one", "two", "three", "four", "five", "six");



//SPREAD OPERATOR
let arr1 = ["one", "two"];
let arr2 = [...arr1, "three", "four", "five"];
let arr3 = ["three", "four", "five"];
console.log(arr2);
console.log(arr1.concat(arr3));
console.log(arr1);
console.log(arr3);



//CLASSES
class Person{
    constructor(name){
        this.name = name;
    }
}
const anna = new Person("Anna");
console.log(anna);


//Animal
class Animal {
    constructor(species, color, age){
        this.species = species;
        this.color = color;
        this.age = age;
    }
}
const animal = new Animal("dog", "black", "5");
console.log(animal);

const horse = new Animal("horse", "brown", "3");
console.log(horse);

const eagle = new Animal("eagle", "black", "2");
console.log(eagle);

const fish = new Animal("fish", "blue", "1");
console.log(fish);



//PROMISE and CALLBACK
