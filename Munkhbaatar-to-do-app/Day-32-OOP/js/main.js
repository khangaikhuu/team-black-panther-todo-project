console.log('Day - 32 - OOP')


// Object literal

// let BMW = {
//     id: 1,
//     name: BMW
// }

// Object class

class Car {
    id;
    name;
}

let volvo = new Car();
volvo.id = 2;
volvo.name = 'Volvo';
console.log(volvo);

// 
let toyota = new Car();
toyota.id = 3;
toyota.name = 'Toyota';
console.log(toyota)


let honda = new Car();
honda.id = 4;
honda.name = 'Honda';
console.log(honda)


// constructor

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// please create Cat, Dog, from animal object

let cat = new Animal('Silver', 5, 'cat');
console.log(cat);

let dog = new Animal('Banhar', 3, 'dog');
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

let dorj = new Human('Dorj', 'male', 33)
console.log(dorj);
console.log(dorj.feet);
dorj.age = 45;
console.log(dorj.age);


// Private property
// OOP important definitions
// ---> Encapsulations          --> Би өөрийнхөө нууцыг хадгалах
// ---> Inheritance             --> Би ааваасаа ямар шинж чанарыг өвлөсөн бэ
// ---> Object Interaction      --> Би бусадтай яаж нийгэмд харилцах вэ /EQ - emotional intelligence/
// ---> Polymorhism             --> Би яаж ааваасаа өвлөж авсан шинж чанараа өөрчлөөд ашиглаж чадах вэ

// Encapsulation -- Private property
class Bicycle {
    #name;
    constructor(name){
        this.#name = name;
    }

    getName () {
        return this.#name;
    }

    setName (name) {
        this.#name = name;
    }
}

let trek = new Bicycle('Trek');
console.log(trek);
// console.log(trek.#name) .  ---> ERROR
// trek.#name = 'Trekking'    ---> ERROR  

console.log(trek.getName());
trek.setName('Trekking');
console.log(trek)




// Inheritance - Уламжилж авах
class Mammal extends Animal {
    haveMilk = true;
}

let wolf = new Mammal('Burte chono', 6, 'wolf')
console.log(wolf);





// 
class Triangle {
    constructor (angleA, angleB) {
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
        super(30, 30);
        this.name = 'Pyramid';
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);


