console.log('day 30')

const contacts = {
    name: 'Jim',
    familyName: 'Dune',
    age: 22
}

console.log(contacts.name);

// ES6 Object destructing

let { name, familyName, age } = contacts;
console.log(familyName);

let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score); // 85, 95, 75
}

// Example 1
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks1.findIndex((rank) => rank === 7);
console.log(index1); // 2

// console.log(ranks1.find((e) => e === 10)) 

// Example 2
let ranks2 = [1, 5, 7, 8, 10, 7];
let index2 = ranks2.findIndex(
    (rank, index) => rank === 7 && index > 2
);
console.log(index2); // 5


function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
}

show('one', 'two', 'three', 'four', 'five', 'six')


let arr1 = ['one', 'two'];
let arr3 = [ 'three', 'four', 'five'];
let result = arr1.concat(arr3);
console.log(arr1.concat(arr3))
console.log(arr1)
console.log(arr3)
console.log(result);

// let arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2);  // ["one", "two", "three", "four", "five"]


class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

const anna = new Person('Anna', 12, 'female');
console.log(anna);

// Animal гэдэг класс үүсгээд тухайн animal нь species, color, 
// age утгуудыг constructor дотроо агуулсан байдлаар харуулна уу
// Хэрвээ үүсгэсэн бол дараа нь Horse, Eagle, Fish энэ төрлийн амьтдыг 
// үүсгэнэ үү

class Animal {
    constructor(species, color, age){
        this.species = species;
        this.color = color;
        this.age = age;
    }
}

const horse = new Animal('Horse', 'brown', 3)
console.log(horse);