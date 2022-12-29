console.log("Day - 32 - OOP");

//object literal

// let BMW = {
//     id:1,
//     name:BMW
// }

//Object class

class Car {
  id;
  name;
}
let ferrari = new Car();
ferrari.id = 2;
ferrari.name = "Laferrari";
console.log(ferrari);

let lamborghini = new Car();
lamborghini.id = 63;
lamborghini.name = "Aventador";
console.log(lamborghini);

//Constructor

class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
}

let animal = new Animal("bucky", 4, "Bulldog");
console.log(animal);

let cat = new Animal("kitty", 3, "CAT");
console.log(cat);

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

let dorj = new Human("Dorj", "Male", 20);
console.log(dorj);

//OOP important definitions
// -Encapsulation
// -Inheritance
// -Object Interaction
// -Polymorhism
//Encapsulation => Private property

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

let trek = new Bicycle("Trek");
console.log(trek);
console.log(trek.getName());
trek.setName("Trekking");
console.log(trek);

//Inheritance
class Mammal extends Animal {
  haveMilk = true;
}

let wolf = new Mammal("Wolfie", 3, "Wolf");
console.log(wolf);

//class super
class Triangle {
  constructor(angleA, angleB) {
    this.angleA = angleA;
    this.angleB = angleB;
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
console.log(geizaPyramid);
