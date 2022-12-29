console.log("day-32 OOP");


// object literal 

let BMW = {
    id: 1,
    name: "BMW"
}

// object class 

class Car {
    id;
    name;
}

let volvo = new Car();
volvo.id = 2;
volvo.name = "volvo";
console.log(volvo);

// please create new cars 


let toyota = new Car();
toyota.id = 3;
toyota.name = "toyota";
console.log(toyota);

let nissan = new Car();
nissan.id = 4;
nissan.name = "nissan";
console.log(nissan);


// constructor 

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// please create cat dog from animal object 

let dog = new Animal("tom", 2, "labrador")
let cat = new Animal("bunny", 5, "british")

console.log(dog, cat);



// human races 

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

let dorj = new Human("Dorj", "man", 23)

console.log(dorj);


// Private property --- information hiding 

// Encapsulation 

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

let trek = new Bicycle("trek")
console.log(trek);
// console.log(trek.#name);

console.log(trek.getName());

trek.setName("Trekking");
console.log(trek);



// Inheritance - Ulamjilj avah 

class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal("burte chono", 6, "Wolf")
console.log(wolf);


// Class super  --- etseg class-aas extend hiij avch bgaatai ijil utgatai

class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = 'Triangle';
    }
}

let triangle1 = new Triangle(50,50);
console.log(triangle1);

class Pyramid extends Triangle {
    constructor() {
        super(60, 60);
        this.name = 'Pyramid';
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);

// const pyramid = new Pyramid();
// console.log(pyramid);