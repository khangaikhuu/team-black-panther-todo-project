class car {
    id;
    name;
}

let bmw = new car();
bmw.id = 2;
bmw.name = "BMW";
console.log(bmw);

let lambo = new car();
lambo.id = 3;
lambo.name = "Lamborghini";
console.log(lambo);

let rr = new car();
rr.id = 4;
rr.name = "Rolce-Royce";
console.log(rr);


class animal {
    constructor(name,age,species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

let dog = new animal("bobby", 10, "dog")
let cat = new animal("jimmy", 4, "cat")
console.log(dog , cat)



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

let Dorj = new Human("Dorj", "male", 23);
console.log(Dorj);

// Private property
// OOP important definitions
// - Encapsulation- би өөрийнөө нууцыг хадгалах
// - Ingeritance- би ааваасаа ямар ямар шинж чанарыг өвлөсөн бэ
// - Object Interaction- би бусадтай яаж нийгэмд харилцах вэ
// - Polymorhism- би яаж аавынхаа өвлөж авсан шинж чанараа өөрчлөөд ашиглаж чадах вэ

class Bicycle {
    #name
    constructor(name){
        this.#name = name;
    }
    getName (){
        return this.#name;
    }
    setName (){
        this.#name = name;
    }
}

let trek = new Bicycle("trek");
console.log(trek);
console.log(trek.getName())
trek.setName("Treking");
console.log(trek)

class Triangle {
    constructor(angleA, angleB){
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = 180 - angleA - angleB;
        this.name = "Triangle";
    }
}

let triangle1 = new Triangle(50 , 50);
console.log(triangle1);

class Pyramid extends Triangle {
    constructor(){
        super(60,60);
        this.name = "Pyramid";
    }
}

let geizaPyramid = new Pyramid();
console.log(geizaPyramid);