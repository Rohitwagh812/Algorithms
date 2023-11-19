// Write a JavaScript program to sort the items of an array.
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Expected Output : -4,-3,1,2,3,5,6,7,8



function sortArray(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  var arr2 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  
  console.log(arr1);
  
  sortArray(arr2);
  
  console.log('sort the items of an array : ',arr2);


//This program uses the built-in JavaScript Array.sort() method to sort the array. The sort() method takes a function as a parameter, which is used to compare two elements in the array. In this case, the function returns the difference between the two elements, which
  