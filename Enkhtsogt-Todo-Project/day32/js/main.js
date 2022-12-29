console.log("day-32");


// Object literal

let car = {
    id:1,
    name:"BMW",
}
console.log(car)

// Object  Class

class Car {
    id;
    name;
}

let volvo = new Car();
volvo.id=2;
volvo.name="volvo";
console.log(volvo);

let BMW = new Car();

BMW.id = 3;
BMW.name="X 6";
console.log(BMW);

let Benz = new Car();

Benz.id = 4;
Benz.name="E Class";
console.log(Benz);

// constructor


class Animal {
    constructor(name,age,species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// Please create Cat, Dog form Animal Object

let cat = new Animal("muujgai", 5 , "Cat");
console.log(cat);
let dog = new Animal("Banhar", 3 , "Dog");
console.log(dog);



//human races

class human {
    constructor(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.feet = 2;
        this.hand = 2;
        this.head = 1;
    }
}

let bat = new human("Bat","Male","25")

console.log(bat);



// Private property

// OOP important definitions
/// - Encapsulation - bi uuriinhuu nuutsiig hadgalah
/// - Inheritance - bi aavaasaa ymr ymr shinj chanar uvulsun be
/// - Object Interaction - Bi busadtai yaj niigemd hariltsah ve EQ -Emotional Intelligens
/// - Polymorhism - bi yaj avaasaa uvulj avsan shinj chanaraa uvulj avsan shinj chanaraa uurchilj chadah ve?

// Encapsulation -> Private property

class Bicycle{
    #name;
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name
    }
    setName(name){
        this.#name = name;
    }
}

let trek = new Bicycle("Trek")
console.log(trek);
// console.log(trek.name) ajilahgui
// trek.#name ="treking" ajillahgui
console.log(trek.getName());
trek.setName("treking");
console.log(trek);


// Inheritance - ulamjilj avah

class Mammal extends Animal{
    haveMilk = true;

}

let wolf = new Mammal("Burte chono", 6, "wolf")
console.log(wolf);



class Triangle {
    constructor(angleA, angleB) {
    this.angleA = angleA;
    this.angleB = angleB;
    this.angleC = 180 - angleA - angleB;
    this.name = 'Triangle';
    }
}

let triangle1 = new Triangle(50 , 50);
console.log(triangle1);

class Pyramid extends Triangle{
    constructor(){
        super(60,60);
        this.name = "Pyramid"
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);