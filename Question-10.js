// Write a program that runs a loop from 1 to 100
// 1. Whenever a number in the loop is multiple of 3, print Cynohub
// JavaScript Assignments 21
// 2. Whenever a number in the loop is multiple of 5, print JavaScript
// 3. Whenever a number in the loop is multiple of 3 and 5, Print Cynohub JavaScript
// 4. If the number is neither a multiple of 3 or 5 print → Still Learning


for ( let i = 1; i <= 100; i++ ){
  if ( i%3 === 0 && i%5 === 0 ){
    console.log( i + " Cynohub JavaScript" );
  }
  else if ( i%3 === 0 ) {
    console.log(i+ " Cynohub" );
  }
  else if ( i%5 === 0 ) {
    console.log(i+ " JavaScript" );
  }
  else{
    console.log(i);
  }
}