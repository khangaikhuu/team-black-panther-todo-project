
let col1 = document.getElementsByClassName("col1")[0]
let col2 = document.getElementsByClassName("col2")[0]
let col3 = document.getElementsByClassName("col3")[0]
let col4 = document.getElementsByClassName("col4")[0]
let col5 = document.getElementsByClassName("col5")[0]


col2.addEventListener("click",() =>{
    col1.style = "width:200px"
    col3.style = "width:200px"
    col4.style = "width:200px"
    col5.style = "width:200px"
    col2.style = "width:600px"
})
col3.addEventListener("click",() =>{
    col1.style = "width:200px"
    col2.style = "width:200px"
    col4.style = "width:200px"
    col5.style = "width:200px"
    col3.style = "width:600px"
})
col4.addEventListener("click",() =>{
    col1.style = "width:200px"
    col2.style = "width:200px"
    col3.style = "width:200px"
    col4.style = "width:600px"
    col5.style = "width:200px"
})
col5.addEventListener("click",() =>{
    col1.style = "width:200px"
    col2.style = "width:200px"
    col3.style = "width:200px"
    col4.style = "width:200px"
    col5.style = "width:600px"
})
col1.addEventListener("click",() =>{
    col1.style = "width:600px"
    col2.style = "width:200px"
    col3.style = "width:200px"
    col4.style = "width:200px"
    col5.style = "width:200px"
})


