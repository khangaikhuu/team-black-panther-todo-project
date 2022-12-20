
// callback function greeting hiideg function. Js gol func gej oilgoj bolno

function greeting(name) {
    alert(`hello, ${name}`);
}
function greetings(callback) {
    const name = prompt("gib me name");
    callback(name);
}

greetings(greeting);
