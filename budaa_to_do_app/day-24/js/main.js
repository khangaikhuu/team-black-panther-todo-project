console.log("call back")

function greeting (name) {
    alert(`Hello ${name}`);
}

function greetings (callback) {
    const name = prompt ("Please enter your name.");
    callback(name);
}

greetings(greeting);
