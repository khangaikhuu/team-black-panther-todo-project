//Object Class

class Car {
    id;
    name;

}
let volvo = new Car();
volvo.id = 2;
volvo.name = "Volvo"
console.log(volvo);

let tesla = new Car();
tesla.id = 3;
tesla.name = "tesla"
console.log(tesla)


//Constructor
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;



    }
}

let dog = new Animal("Bambar", 5, "banhar")
console.log(dog)

class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.feet = 2;
        this.hand = 2;
        this.head = 1

    }
}

let dorj = new Human("Dorj", "man", 25);
console.log(dorj)

//Private Property
//OOP IMPORTANT DEFINITIONS
//-ENCAPSUALTION
//INHERITANCE
//OBJECT INTERACTION- 
//POLYMORHISM BI YAJ AAWIINHAA UWLUJ AWSAN SHINJ CHANARAA UURCHLUHUD ASHIGLAJ CHADAH WE


// class bicycle {
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }
// }
// getNames(){
//     return this.#name;
// }
// setNames(){
//     return this.#name;
// }

// let trek = new bicycle("Trek")
// console.log(trek.getName)
// trek.setName("Trekking")
// console.log(trek)



// class Mammal extends Animal {
//     haveMilk = true;
// }


class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = "Triangle"
    }
}

let Triangle1 = new Triangle(50,50);
console.log(Triangle1);

class pyramid extends Triangle {
    constructor(){
        super(60,60);
        this.name = "Pyramid"
    }
}

let geizaPyramid = new pyramid();
console.log(geizaPyramid)