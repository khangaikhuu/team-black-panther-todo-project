console.log("hello");

//object literal

let BMW = {
    id: 1,
    name: "BMW"


}
//object class

class Car {
    id;
    name;
}
let volvo = new Car();
volvo.id = 2;
volvo.name = "volvo";
console.log(volvo);
let myCar = new Car();
myCar.id = 2202;
myCar.name = "prettymuch";
console.log(myCar);

let BYD = new Car ();
BYD.id = 4;
BYD.name = "BYD";
console.log(BYD);
//constructor

class Animal {
    constructor(name,age, species){
        this.name = name;
        this.age = age;
        this.species = species; 
    }
    
}

let cat = new Animal("Anna", 3, "Cat" );
console.log(cat);
let dog = new Animal("Banhar", 6, "Dog");
console.log(dog);

//initial value anhnii utga

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
let Dorj = new Human("Dorj", "Man", 25);
console.log(Dorj);
console.log(Dorj.feet);
Dorj.age = 26;
console.log(Dorj);


//class private property
//OOP important definitions
//encapsulation// bi uuriinhuu nuutsiig hadgalah
//Inheritance// shinij chanar uurchiluh
//Object interaction// bi busadtai herhen haritsah we
//Polymorhism// bi yaj aawhiinha uwluj awsan shinj chanaraa uurchilj chadah we
// Encapsulation -> private property
class Bicycle  {
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
let trek = new Bicycle("Trek");
console.log(trek);
// console.log(trek.#name);
// trek.#name = "Treking"
console.log(trek.getName());
trek.setName('Trekking');
console.log(trek);

//inheritance extends gej bichne ulamjlalj awdag
class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal("Burte Chono", 6, "Wolf" )
console.log(wolf);
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
console.log(triangle1);



class Pyramid extends Triangle {
        constructor() {
        super(60, 60);
        this.name = 'Pyramid';
        }
        }
        const pyramid = new Pyramid();
        console.log(pyramid);
let geizaPyramid = new Pyramid();
console.log(geizaPyramid);