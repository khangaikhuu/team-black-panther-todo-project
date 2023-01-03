console.log('Day - 32 OOP');

/// Object literal

let BMW = {
    id: 1,
    name: "BMW"
}


/// Object class

class car {
    id;
    name;
}

let volvo = new car();
    volvo.id = 2;
    volvo.name = "Volvo";

    console.log(volvo);

let BYD = new car();
    BYD.id = 3;
    BYD.name = "BYD";
    console.log(BYD);


let tesla = new car();
    tesla.id = 4;
    tesla.name = "Tesla";   
     console.log(tesla);


// Constructor

class Animal{
    constructor(
        name,
        age,
        species
    ){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}
let Cat = new Animal('Alagaa',1,'cat');
let Dog = new Animal('Banhar',2,'dog');

console.log(Cat);
console.log(Dog);

// Human races

class Human {
    constructor(name, gender, age ){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.feet = 2;
        this.hand = 2;
        this.head = 1;
    }
}

let Dorj = new Human('Dorj','Male',400);

console.log(Dorj);

// Private property
// OOP importand definations

//  - Encapsulation - Би өөрийнхөө нууцыг хадгалах
//  - Inheraitance - Би ааваасаа ямар ямар шинж чанарыг өвлөсөн бэ
//  - Object Interaction - Би бусадтай яаж нийгэмд харицах вэ ? жишээ нь : EQ - emotional intelligent
//  - Polymorhism - Би яаж аавынхаа өвлөж авсан шинж чанараа өөрчлөөд ашиглаж чадах вэ?

class bicycle {
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


let trek = new bicycle('trek')
// console.log(trek.#name);
Dorj.age = 26;
console.log(trek.getName());
console.log(trek)


class Mammal extends Animal{
    canHaveMilk = true;
}

// inheritance - уламжилж авахх

let wolf = new Mammal('Wolf',3,'CHono');
console.log(wolf);

// Class super

class Triangle {
    constructor(AngleA, AngleB){

        this.AngleA = AngleB;
        this.AngleB = AngleA;
        this.AngleC = 180 - AngleA - AngleB;
        this.name = 'Triangle';
    }

}


