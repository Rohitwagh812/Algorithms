let number = [10,15,20,76,100,1000,220,25,110,101]
// Write a program to count the total number of times 0 occurs in the array

console.log(number);

let allnum=  number.toString()
  
let  zeros = allnum.match(/0/g);


let  count = zeros.length;

console.log("count the total number of times 0 occurs :")

console.log(count);


