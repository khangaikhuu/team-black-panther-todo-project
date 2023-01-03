console.log("day-32")

let car = {
    id: 1,
    name: "BMW"
}

class Car {
    id;
    name;
}

let volvo = new Car();
volvo.id = 2;
volvo.name = `Volvo`;
console.log(volvo)

let toyota = new Car();
toyota.id = 3;
toyota.name = `lexus`;
console.log(toyota)

let jeep = new Car();
jeep.id = 4;
jeep.name = `wrangler`;
console.log(jeep)

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

let cat = new Animal("meow", 10, `cat`);
console.log(cat);
let dog = new Animal("hov", 2, "dog")
console.log(dog)

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
let dorj = new Human("dorj", "male", 20)
console.log(dorj)
console.log(dorj.feet)

// OOP important definitions
// encapsulation = би өөрийнхөө нууцыг хадгалах
// inheritance = Би ааваасаа ямар ямар шинж чанарыг өвлөсөн бэ
// object interaction = Би бусадтай яаж нийгэмд харилцах вэ Жишээ нь EQ
// Polymorhism = Би яаж аавынхаа өвлөж авсан шинж чанараа өөрчлөөд ашиглаж чадах вэ

class Bicycle {
    #name;                  // encapsulation
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
let trek = new Bicycle("Trek")
console.log(trek)
console.log(trek.getName())
trek.setName("Trekking");
console.log(trek)

// inheritance
class Mammal extends Animal {
    haveMilk = true;

}

let wolf = new Mammal("Burte Chono", 6, "wolf")
console.log(wolf)

//class super
class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = 'Triangle';
    }
}

let triangle1 = new Triangle(50, 50);
console.log(triangle1)

class Pyramid extends Triangle {
    constructor() {
        super(60, 60);
        this.name = 'Pyramid';
    }
}
let geizaPyramid = new Pyramid();
console.log(geizaPyramid)