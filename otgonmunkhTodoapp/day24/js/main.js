
console.log("callback");
console.log("day24");
function greeting (name){
    alert(`Hello , ${name}`);
}
function greetingInConsole(name){

}


function greetings(callback){
    const name = prompt("Please enter your name");
    callback(name);
}
greetings(greeting);