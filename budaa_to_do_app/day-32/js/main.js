console.log("day-32-OOP");


/// Object literal

let BMW = {
    id: 1,
    name: "BMW"
}


// Objject class 

class Car {
    id;
    name;
}


let volvo = new Car();
volvo.id = 2; 
volvo.name = "Volvo";
console.log(volvo)

let land = new Car();
land.id = 3; 
land.name = "300"
console.log(land);

let gclass = new Car();
gclass.id = 4;
gclass.name = "G-63"
console.log(gclass);

// Constructor 

class Animal {
    constructor(name, age, species){
        this.name = name; 
        this.age = age;
        this.species = species;
    }
}

// Please create Cat, Dog, from Animal Object 

let Cat = new Animal ("Banhar", 5, "cat")
console.log(Cat);
let Dog = new Animal ("Haruul", 7, "dog")
console.log(Dog);

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

let Dorj = new Human ("Dorjoo", "er", 59)
console.log(Dorj);
console.log(Dorj.feet);
Dorj.age = 26;
console.log(Dorj)
// Private property  
// OOOp impoortant definitions 
/// -Encapsulation  - Bi ooriinhoo nuutsiig hadgalah
/// -Inheritance -Bi aawaasaa ymar ymar shinj chanariig ovloson be
/// -Object Interaction -Bi busadtai yaj niigemd hariltsah ve? Jishee ni EQ-Emotional Intelligen
// / -Polymorhism - Bi yj aawiinhaa ovloj awsan shinj chanaraa oorchlood ashilaj chadah ve?

// Encapsulation -> Private property 
class Bicycle {
    #name;
    constructor(name){
        this.#name = name;
    }
    getName (){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }
}

let trek = new Bicycle("Trek")
console.log(trek);
// console.log(trek.#name);
// trek.#name = "Trekking"
console.log(trek.getName());
trek.setName("Trekking");
console.log((trek));

// Inherintance = Ulalmjilj avah

class Mamal extends Animal {
    haveMilk = true;
 }


 // class super 
 class Triangle { 
     constructor(angleA, angleB){
         this.angleA = angleA;
         this.abgleB = angleB;
         this.angleC = 180 - angleA - angleB;
         this.name = "Triangle";
     }
 }
let triangle1 = new Triangle(50, 50);
console.log(triangle1);

class Pyramid extends Triangle {
    constructor() {
        super(60, 60);
        this.name = "Pyramid";
    }
}
let geizaPyramid = new Pyramid();
console.log(geizaPyramid)






