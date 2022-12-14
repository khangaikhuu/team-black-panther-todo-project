date();

function date() {
    let now = new Date();
    let myDate = document.getElementById('date');
    myDate.innerHTML = now.getDate();
    //myDate.innerHTML = now.getHours() + " : " + now.getMinutes() + " : "+ now.getSeconds() + " : " + now.getMilliseconds();
}

