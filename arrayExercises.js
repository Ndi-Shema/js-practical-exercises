//Write a function that takes an array of numbers 
//and returns the sum of the numbers. 
//The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.


// function sum (numbers) {
//     "use strict";
    
//     const totals = numbers.reduce( (x,y) => x+y,0);
//     return totals;
// }

// let arr = [1,2,-5,5];
// console.log(sum(arr));

// function sum (numbers){
//     var total = 0;

// for (var i=0; i<numbers.length; i++){
//     total += numbers[i] ;
// }

// return total;
// }
// console.log(sum([1,2,3,4]));
function strngI(name){
    let word ="";
    for (let i =0; i<name.length; i++){
        if (([i]%2) !==0) {
            word += name.charAt(i);
            console.log(word);
        }
    }

}const myString= "hello, world"
strngI(myString);