const contacts = {
    name: "Jim",
    familyName: "Dune",
    age: 22
}

let {name, familyName, age} = contacts;
console.log(familyName);

let ranks1 = [1,5,7,8,10,7];
let index1 = ranks1.findIndex(rank => rank === 7);
console.log(index1);


let ranks2 = [1,5,7,8,10,7];
let index2 = ranks2.findIndex(
    (rank, index) => rank === 7 && index > 2
    );
console.log(index2);

let arr1 = ["one", "two"];
let arr3 = ["three", "four", "five"];

class person {
    constructor(name){
        this.name = name;
    }
}

const anna = new person("Anna");

console.log(anna);

class Animal {
    constructor(species, color, age){
        this.species = species;
        this.color = color;
        this.age = age;
    }
}

const horse = new Animal("horse","black",3);
const eagle = new Animal("eagle","brown",6)
const fish = new Animal("fish","white",1)
console.log(horse, eagle, fish);



