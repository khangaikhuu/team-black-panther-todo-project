let car = {
    id: 1,
    name: 'BMW'
}

console.log(car)


class Car {
    id;
    name
}

let volvo = new Car()
volvo.id = 2
volvo.name = "Volvo"
console.log(volvo)





let Wrangler = new Car()
Wrangler.id = 3
Wrangler.name = 'Wrangler'
console.log(Wrangler)


let Tesla = new Car()
Tesla.id = 4
Tesla.name = 'Tesla'

console.log(Tesla)



class Animal {
    constructor(name, age, species) {
        this.age = age
        this.name = name
        this.species = species
    }
}

let cat = new Animal('muujgai', 5, 'cat')
console.log(cat)

let dog = new Animal('Banhar', 4, 'dog')
console.log(dog)


class human {
    constructor(name, gender, age) {
        this.name = name
        this.gender = gender
        this.age = age
        this.feet = 2
        this.hand = 2
        this.head = 1
    }

}

let dorj = new human('dorj', 'male', '25')

console.log(dorj)

// Private property
// OOP importand defination
/// - Encapsulation - Nuutsiig hadgalah
/// - Inheritance - Shinj chanar uvluh
/// - Object interaction - Busadtai hariltsah
/// - Polymorhism - 




// Encapsulation -> Private property
class Bicycle {
    #name
    constructor(name) {
        this.#name = name
    }
    getName() {
        return this.#name
    }
}

let trek = new Bicycle('trek')
console.log(trek)
console.log(trek.getName())



// Inheritance
class Mammal extends Animal {
    havemilk = true
}

let wolf = new Mammal('Burte', 6, 'wolf')

console.log(wolf)


class Triangle {
    constructor(angleA, angleB) {
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = 'Triangle';
    }
}
let Triangle1 = new Triangle(50, 50)
console.log(Triangle1)

class Pyramid extends Triangle {
    constructor() {
        super(60, 60)
        this.name = 'Pyramid'
    }
}
let geizaPyramid = new Pyramid()
console.log(geizaPyramid)