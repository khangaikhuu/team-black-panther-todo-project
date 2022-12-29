console.log('day-32')

// Object literal

let car = {
    id: 1,
    name: 'BMW'
}

/// Object class

class Car {
    id;
    name;
}

let volvo = new Car ();
volvo.id = 2;
volvo.name = "Volvo"
console.log(volvo)

let mB = new Car ();
mB.id = 1;
mB.name = "MercedesBenz";
console.log(mB) 

let tesla = new Car ();
tesla.id = 10;
tesla.name = "Tesla";
console.log(tesla) 


// Constructor 
class Animal {
    constructor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// Please create Cat, Dog from Animal Object

let cat = new Animal("Coco", 3, "cat")
console.log(cat)

let dog = new Animal('Didi', 2, 'dog')
console.log(dog)

// Human races

class Human {
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender; 
        this.age = age;
        this.feet = 2;
        this.hand = 2;
        this.head = 1;
    }
}

let dorj = new Human('Dorj', "Male", "22")
console.log(dorj)
console.log(dorj.feet)
dorj.age = 26;
console.log(dorj)

// Class Private property 
// OOP important definitions 
/// - Encapsulation - Би өөрийнхөө нууцыг хадгалах
/// - Inheritance - Bi avaasaa yamar yamar shinj chanarig uvlusun be
/// - Object Interaction - Bi busadtai yaj niigemd hariltsah ve
/// - Polymorhism - Би яаж аавынхаа өвлөж авсан shinj chanaraa uurchluud ashigalj chadahvee 

// Encapsulation -> Private property
class Bicycle {
    #name;
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }
} 
let trek = new Bicycle('Trek')
console.log(trek)
// console.log(trek.#name)    bolohgui
// trek.#name = "Trekking"    bolohgui
console.log(trek.getName())  // function getName() duudaj baij garna
trek.setName("Trekking");   // function setName() duudaj baij solino
console.log(trek)


// Inheritance - Ylamjilj avah
class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal("Burte Chono", 6, "Wolf")
console.log(wolf)

// Class Super
class Triangle {
    constructor(angleA, angleB){
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = "Triangle";
    }
}

let triangle1 = new Triangle(50, 50);
console.log(triangle1)

class Pyramid extends Triangle {
    constructor(){
        super(60, 60);
        this.name = 'Pyramid';
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid)

