console.log('Day - 24 ')

function greeting(name) {
    alert(`Hello, ${name}`);
  }

function greetingInConsole(name){
    console.log(`Hello, ${name}`)
} 

  function greetings(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
   
  greetings(greeting);
  greetings(greetingInConsole)