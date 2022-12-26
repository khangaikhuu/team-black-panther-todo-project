let col1 = document.getElementsByClassName("col")
console.log(col1);
col1.addEventListener("click", (self) => {
    for (let i = 0; i < col1.children.length; i++) {
        console.log(col1.children[i]);
        col1.children[i].alt='img';
        col1.children[i].style = 'width: 600px;'

        // imgContainer.children[i].addEventListener('click', (self)=>{
        //     console.log(self.target)
        //     self.target.src="https://images.unsplash.com/photo-1671533418073-6b39f9163e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
        // })
    }
})