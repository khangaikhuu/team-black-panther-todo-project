
console.log('slider')





let Zurag1= document.getElementById("zuragnuud1");
let Zurag2=document.getElementById("zuragnuud2");
let Zurag3=document.getElementById("zuragnuud3");
let Zurag4=document.getElementById("zuragnuud4");
let Zurag5=document.getElementById('zuragnuud5');


console.log(Zurag1);
console.log(Zurag2);
console.log(Zurag3);
console.log(Zurag4);
console.log(Zurag5);


Zurag1.addEventListener('click',(self)=>{
    console.log('Zurag1 clicked');
    console.log(self.target);
    self.target.style="width: 500px"
    
})

Zurag2.addEventListener('click',(self)=>{
    console.log('Zurag2 clicked');
    console.log(self.target);
    self.target.style="width: 500px "
    

})
Zurag3.addEventListener('click',(self)=>{
    console.log('Zurag3 clicked');
    console.log(self.target);
    self.target.style="width: 500px"
})
Zurag4.addEventListener('click',(self)=>{
    console.log('Zurag4 clicked');
    console.log(self.target);
    self.target.style="width: 500px"
})
Zurag5.addEventListener('click',(self)=>{
    console.log('Zurag5 clicked');
    console.log(self.target);
    self.target.style="width: 500px"
})







// const imgContainer = document.getElementById('container');

// const children = imgContainer.children;

// for(let i = 0; i< children.length; i++){
//     if (i === 0) {
//         children[i].style = 'width: 500px;'
//     } else{
//         children[i].style = 'width:200px;'
//     }
// }

// console.log(imgContainer.children);

// const button = document.getElementById('btn');

// button.addEventListener('click', (self) => {
//     for (let i = 0; i < imgContainer.children.length; i++) {
//         console.log(imgContainer.children[i]);
//         imgContainer.children[i].alt='img';
//         imgContainer.children[i].style = 'width: 200px;'

//         imgContainer.children[i].addEventListener('click', (self)=>{
//             console.log(self.target)
            
//         })
//     }
// })
