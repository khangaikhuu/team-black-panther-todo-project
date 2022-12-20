console.log("day-24");

function greeting (name){
    alert(`"hello" ${name}`);
}

function greetings(callback){
    const name = prompt ("Please enter your name");
    callback(name);
}

greetings(greeting);