

//Write a program to count the number of 0's in the number


let  number = '929901022301030010001302010';

console.log(number)

let  zeros = number.match(/0/g);


let  count = zeros.length;

console.log("count the number of 0's :")

console.log(count);
