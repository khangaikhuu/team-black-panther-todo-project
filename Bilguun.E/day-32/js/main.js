let car = {
    id: 001,
    name: "BMW"
}


class Car {
    id;
    nam;
}

let Volvo = new Car();
Volvo.id = 002;
Volvo.name = "Volvo"

let Nissan = new Car();
Nissan.id = 003;
Nissan.name = "Nissan"

let Bugatti = new Car();
Bugatti.id = 099;
Bugatti.name = "Bugatti"

class Animal {
    constructor(name, age, species,
    ) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

let Dog = new Animal("Doug", 4, "Dog")
console.log(Dog)

let Cat = new Animal("Catie", 5, "Cat")
console.log(Cat)


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

let dorj = new Human("Dorj", "Male", 45)
console.log(dorj)

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

let trek = new Bicycle("Trek")
console.log(trek)
console.log(trek.getName())
trek.setName("Trekking")
console.log(trek)


// ** Inheritance
class Mammal extends Animal {
    haveMilk = true
}

let wolf = new Mammal("Burte Chono", 6, "Wolf")
console.log(wolf)

class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA
        this.angleB = angleB
        this.angleC = 180 - angleA - angleB
        this.name = "Triangle"
    }
}

let triangle1 = new Triangle(50, 50)
console.log(triangle1)

class Pyramid extends Triangle {
    constructor(){
        super(60, 60)
        this.name = "Pyramid"
    }
}

let GizaPyramid = new Pyramid()
console.log(GizaPyramid)