console.log("day-27")

fetch("http://127.0.0.1:5500/data.html")
.then((res) => res.json())
.then((data) => {
console.log(data);
});