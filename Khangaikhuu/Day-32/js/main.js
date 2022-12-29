console.log('Day - 32 - OOP')

/// Object literal

let BMW = {
    id: 1,
    name: "BMW"
}

/// Object class

class Car {
    id;
    name;
}

let volvo = new Car();
volvo.id = 2;
volvo.name = 'Volvo';
console.log(volvo);

// Please create two new cars

let BYD = new Car();
BYD.id = 3;
BYD.name = 'BYD';
console.log(BYD)
let Tesla = new Car();
Tesla.id = '4';
Tesla.name = 'Tesla'
console.log(Tesla)

// Constructor
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// Please create Cat, Dog from Animal Object
let cat = new Animal('Muujgai', 5, 'cat')
console.log(cat)

let dog = new Animal('Banhar', 6, 'dog');
console.log(dog)

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

let dorj = new Human('Dorj', 'man', 25);
console.log(dorj)
console.log(dorj.feet)
dorj.age = 26;
console.log(dorj)



// OOP important definitions
/// - Encapsulation - Би өөрийнхөө нууцыг хадгалах
/// - Inheritance - Би ааваасаа ямар ямар шинж чанарыг өвлөсөн бэ
/// - Object Interaction - Би бусадтай яаж нийгэмд харилцах вэ? Жишээ нь EQ-Emotional Intelligence
/// - Polymorhism - Би яаж аавынхаа өвлөж авсан шинж чанараа өөрчлөөд ашиглаж чадах вэ

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

let trek = new Bicycle('Trek')
console.log(trek)
// console.log(trek.#name)
// trek.#name = 'Trekking'
console.log(trek.getName())
trek.setName('Trekking');
console.log(trek);

// Inheritance - Уламжилж авах
class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal('Burte Chono', 6, 'Wolf')
console.log(wolf);

// Class super
class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = 'Triangle';
    }
}
let triangle1 = new Triangle(50, 50);
console.log(triangle1);

class Pyramid extends Triangle {
    constructor() {
        super(60, 60);
        this.name = 'Pyramid';
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);

