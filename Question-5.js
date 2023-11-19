let numbers = [ 1 , 3 ,5 ,7, 9 ]
// Let’s say the array is supposed to have all the numbers from 1-10.
// But the array is missing few numbers
// Write a program to find out all the missing numbers from 1-10 in the array
 console.log(numbers)

//  console.log('all the missing numbers from :-', missing)

count = 10 ; 
let missing = new Array();

  for(let i = 1; i <= count ; i++){
    if(numbers.indexOf(i) ==-1){
        missing.push(i)
        }
  }

  // console.log(missing)

  console.log('The Missing Numbers From :-', missing)



 