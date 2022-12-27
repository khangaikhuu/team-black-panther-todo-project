const contacts = {
    name: "Jim",
    familyName: "Dune",
    age: 22
}

console.log(contacts.name)

let { name, familyName, age } = contacts

console.log(familyName)
console.log(age)


let scores = [80, 90, 70]

for (let score of scores) {
    score = score + 5
    console.log(score)
}


let ranks1 = [1, 5, 7, 8, 10, 7]
let index1 = ranks1.findIndex(rank => rank === 7)
console.log(index1)

let rank2 = [1, 5, 7, 8, 10, 7]
let index2 = rank2.findIndex((rank, index) => rank === 7 && index > 2)

console.log(index2)


function show(a, b, ...args) {
    console.log(a)
    console.log(b)
    console.log(args)
}

let arr1 = ["one" , "two"]
let arr2 = [...arr1, "three", "four", "five"]
console.log(arr2)


class Person {
    constructor(name,age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const anna = new Person("Anna", 12, "Female")

console.log(anna)

class Animals {
    constructor(species, color, age) {
        this.species = species
        this.color = color
        this.age = age
    }
}

console.log(Animals)

const Horses = new Animals("Horse", "Brown", 3)
console.log(Horses)
const Eagles = new Animals("Eagle", "Grey", 6)
console.log(Eagles)