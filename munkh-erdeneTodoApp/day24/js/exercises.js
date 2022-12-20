console.log('exercises');
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//

//ogogdson array nii bugdiin element tuudeer guugeed elemt bolgon deer ogogdson function heregjuuleh function bich
function addition(arr, callback) {
    
   
    for (let i = 0; i < arr.length; i++) {
       arr[i]=callback(arr[i]);
    }
    

}
function addTwo(n) {
    return n + 2;
}
console.log(arrays);
addition(arrays, addTwo);
console.log(arrays);