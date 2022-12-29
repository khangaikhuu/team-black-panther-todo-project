
// object literal hiih arga 

let bmw = {
    id: 1,
    name: "BMW"
}

// asuudal n dahin dahin uusgeh bolgondoo bichij baina
// object class ashiglatsgaaya 

class car {
    id;
    name;
}

let volvo = new car();
volvo.id = 2;
volvo.name = "volvo"
console.log(volvo)

let Nissan350zDK = new car();
Nissan350zDK.id = 3;
Nissan350zDK.name = "Nissan350zDK"
console.log(Nissan350zDK)

let Skyline = new car();
Skyline.id = 4;
Skyline.name = "Skyline"
console.log(Skyline)

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;

    }
}

let cat = new Animal("meaw", 5, "catto")
console.log(cat);

let dog = new Animal("woof", 2, "doggo")
console.log(dog);

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
let dorje = new Human("Dorje", "male", 32)
console.log(dorje);

// encapsulate- deer private information orulj iredege baina.
// inheritance- shinj chanar uvluj avah.
// object interaction- busad zuilstei hariltsah.
// polyphohism- uurchilj uurtuu avah buyu dasan zohitsoh.

// Encapsolation => Privaty Property, Privancy 

class bicycle {
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
let trek = new bicycle("trek")
// console.log(trek);
console.log(trek.getName())

// dandaa haalt aldaj bicheed baina

trek.setName("trekking");
console.log(trek);
console.log(trek.getName())


// inheritance example- ulamjlaj avah extends gej bichin utga dotor bichsen utgiig ugdug.

class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal("HUH", 6, "Wolf")
console.log(wolf);

class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = "Triangle";
    }
}
let triangle1 = new Triangle(50, 50);
console.log(triangle1)

class Pyramid extends Triangle {
    constructor() {
        super(60, 60); 
        // angleA, angleB hesgiig end oruulav utga oruulah argiig Triangle hesgees avsan baina.
        this.name = "Pyramid";
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);