console.log('Day - 32 - OOP');

// OBJECT LITERAL
let BMW = {
    id: 1,
    name: 'BMW'
}

// OBJECT CLASS
class Car {
    id;
    name;
}

let volvo = new Car ();
volvo.id = 2;
volvo.name = 'Volvo';
console.log(volvo);

// CREATING IN MY CAR
console.log('MY CAR CLASS OBJECT')

let meybach = new Car ();
meybach.id = 21;
meybach.name = 'meybach';
console.log(volvo);

// CONSTRUCTOR
class Animal {
    constructor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// CREATE CAT , DOG from ANIMAL OBJECT

// cat
let cat = new Animal('Muujgai', 5, 'cat')
console.log(cat)

// dog
let dog = new Animal('banhar', 4, 'dog')
console.log(dog)


// HUMAN RACES                         //
class Human {                          //
 constructor(name, gender, age) {      //
    this.name = name;                  //
    this.gender = gender;
    this.age = age;
    this.feet = 2;
    this.hand = 2;
    this.head = 1;
 }
}

let dorj = new Human('Dorj', 'man' , 19)
console.log(dorj)

// OBJECT NUUTSLAL PRIVATE PROPERTY
// O-O-P important definitions
// *** *** ///
/// Encapsulation - Bi uuriinhuu nuutsiig hadgalah.
/// Inheritance - Bi aawaasaa ymar ymar shinj chanariig uwlusun be.
/// Object Interaction  - Bi busadtai yaj niigemd hariltsah we? jishee n: EQ buyu Emotional Intelligen
/// Polymorhism - Bi yaj aawiinhaa uwluj avsan shinj chanaraa uurchluud ashiglaj chadah we.


///////////////////////////////////////
// Encapsulation -> Private property //
class Bicycle {                   /////
    #name                         //
    constructor(name) {           //
        this.#name = name;        //
    }                             //
    getName (){                   //
        return this.#name         //
    }                             //
                                  //  
    setName(name){                //
        this.#name = name         //
    }                             //
}                                 //
                                  //
let trek = new Bicycle('Treck')   //
console.log(trek)                 //
console.log(trek.getName())       //
trek.setName('Trekking')          //
console.log(trek)                 //
////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Imheritance buyu ulamjlaj avah zuil                                                                  //
class Mammal extends Animal { // iim amitan gej zaralhin tuld extends gedgiig zarlana                   //
    haveMilk = true;            // Mammal n - huhtun amitan gesen ug                                    //
}                                                                                                       //
                                                                                                        //
let wolf = new Mammal('Burte Chono', 6, 'Wolf')                                                         //
console.log(wolf);                                                                                      //
                                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASS SUPER BUYU Ymar negen baidlaas etseg classaas extend hiij avj bgatai adilhan                   //
class Triangle {                                                                                        //
    constructor(angleA, angleB) {                                                                       //
        this.angleA = angleA;                                                                           //
        this.angleB = angleB;                                                                           //
        this.angleC = 180 - angleA - angleB;                                                            //
        this.name - 'Triangle';                                                                         //
    }                                                                                                   //
}                                                                                                       //
                                                                                                        //
let triangle1 = new Triangle(50, 50);                                                                   //
console.log(triangle1);                                                                                 //
                                                                                                        //
class Pyramid extends Triangle {                                                                        //
    constructor(){                                                                                      //
        super(60, 60);                                                                                  //
        this.name = 'Pyramid';                                                                          //
    }                                                                                                   //
}                                                                                                       //
                                                                                                        //
let getizPyramid = new Pyramid();                                                                       //
console.log(getizPyramid);                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
