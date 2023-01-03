console.log("day 32 OOP");

// Object literal
let BMW = {
    id: 1,
    name: "BMW"
}


//Object class
class Car{
    id;
    name;
}

let volvo = new Car();
volvo.id = 2;
volvo.name = "volvo";
console.log(volvo);

let lexus = new Car();
lexus.id = 3;
lexus.name = "lexus";
console.log(lexus);

let teasla = new Car();
teasla.id = 4;
teasla.name = "tesla";
console.log(teasla);


//Constructor
class Animal{
    constructor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

let cat = new Animal("meowie", 3, "cat");
console.log(cat);

let dog = new Animal("baby", 4, "dog");
console.log(dog);


//Human races
class Human{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.feet = 2;
        this.hand = 2;
        this.head = 1;
    }
}

let dorj = new Human("Dorj", "male", 27);
console.log(dorj);
console.log(dorj.feet);
dorj.age = 28;
console.log(dorj);


//Private Property
//OOP important definitions
/// - Encapsulation - Би өөрийнхөө нууцыг хадгалах
/// - Inheritance - Би ааваасаа ямар ямар шинж чанарыг өвлөж авсан
/// - Object Interaction - Би бусадтай яаж нийгэмд харилцах вэ? Жнь EQ - Emotional
/// - Polymorthism

/// Encapsulation -> Private Property 
class Bicycle{
    #name;
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    setName(){
        this.name = name;
    }
}
let treck = new Bicycle("treck");
console.log(treck);
// console.log(treck.#name);
// treck.#name = "trecking";
console.log(treck.getName());
treck.setName("Trecking");
console.log(treck);


//Inheritance
class Mammal extends Animal{
    haveMilk = true;
}

let wolf = new Mammal("Burte Chono", 6, "Wolf");
console.log(wolf);

class Triangle {
    constructor(angleA, angleB){
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = "Triangle";
    }
}

let triangle1 = new Triangle(50, 50);
console.log(triangle1);

class Pyramid extends Triangle{
    constructor(){
        super(60, 60);
        this.name = "Pyramid"
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);