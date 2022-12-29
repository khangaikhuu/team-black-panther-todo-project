console.log('-------------day-32 OOP ---------------');


// Object Literal

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

let toyota = new Car();
toyota.id = 3;
toyota.name = 'Toyota';

console.log(toyota);

let nissan = new Car();
nissan.id = 3;
nissan.name = 'Nissan';

console.log(nissan);


// Constractor

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}



let cat = new Animal('Muujgai', 5, 'cat');
console.log(cat);
let dog = new Animal('Banhar', 7, 'dog')
console.log(dog);

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

let dorj = new Human('Dorj', 'Male', 25)
console.log(dorj);
console.log(dorj.feet);
dorj.age = 26;
console.log(dorj);




// Private property
// OOP important definitions
// - Encapsulation - Би өөрийнхөө нууцыг хадгалах
// - Inheritance - Би ааваасаа ямар ямар шинж чанар өвөлсөн бэ
// - Oject Interaction - Би бусадтай яаж нийгэмд харилцах вэ? EQ
// - Polymorhism - Би яаж аавынхаа өвлөж авсан шинж чанараа өөрчлөөд ашиглаж чадах вэ

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
console.log(trek);
// console.log(trek.#name);

console.log(trek.getName());

trek.setName('Trekking');
console.log(trek);


// Inheritance - Уламжилж авах

class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal('Burte Chono', 6, 'Wolf');
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

let triangle = new Triangle(50, 50)
console.log(triangle);
class Pyramid extends Triangle {
    constructor() {
        super(60, 60);
        this.name = 'Pyramid';
    }
}

let geizaPrymid = new Pyramid();
console.log(geizaPrymid);