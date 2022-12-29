
// Object literal
let BMW = {
    id: 1,
    name: "BMW"
}


// Object class

class Car {
    id;
    name;
}

let volvo = new Car();
volvo.id = 2;
volvo.name = 'Volvo';
console.log(volvo);

let lexus = new Car();
lexus.id = 3;
lexus.name = 'Lexus';
console.log(lexus);

let bmw = new Car();
bmw.id = 4;
bmw.name = 'BMW';
console.log(bmw);

// Constructor
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// Please create Cat, Dog from Animal Object
let dog = new Animal('Max', 5, 'hotdog');
console.log(dog);
let cat = new Animal('Bun', 3, 'hotcat');
console.log(cat);

// Human races
class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.feet = 2;
        this.hand = 2;
        this.head = 1;
    }
}

let dorj = new Human('Dorj', 'Male', 21)
console.log(dorj);

// Private property
// OOP important definitions
/// - Encapsulation - Bi uuriinhuu nuutsiig hadgalah
/// - Inheritance - Bi aavaasaa ymar ymar shinj chanariig uvlusun be
/// - Object Interaction - Bi busadtai yaj niigemd hariltsah ve
/// - Polymorphism - Bi yaj aaviinhaa uvluj avsan shinj chanaraa uurchluud ashiglaj chadah ve

// Encapsulation -> Private property
class Bicycle {
    #name;
    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
}

let trek = new Bicycle('Trek');
console.log(trek); //Bicycle {#name: 'Trek'}
console.log(trek.getName()); //Trek
trek.setName('Trekking');
console.log(trek); //Bicycle {#name: 'Trekking'}


// Inheritance - Ulamjilj avah
class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal('Burte', 21, 'Wolf')
console.log(wolf); //Mammal {name: 'Burte', age: 21, species: 'Wolf', haveMilk: true}

// Class super
class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = 'Triangle';
    }
}

let triangle1 = new Triangle(50,50);
console.log(triangle1)

class Pyramid extends Triangle {
    constructor() {
        super(60, 60);
        this.name = 'Pyramid';
    }
}

let geizaPyramid = new Pyramid();
console.log('Geiza',geizaPyramid);