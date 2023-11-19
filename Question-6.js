

// Write a program that calculates the largest sum of the 2 arrays


let setA = [20,40,10,8,15,25]
let setB = [100, 3, 7, 9, 10 , 15 ]

console.log(setA)
console.log(setB)


let arr1 = setA
let arr2 = setB

function largestSum(arr1, arr2) {
    let max = 0;
    let sum = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
      if (sum > max) {
        max = sum;
      }
    }
  
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i];
      if (sum > max) {
        max = sum;
      }
    }
  
    return max;
  }

  console.log(' calculates the largest sum of the 2 arrays:')
  console.log( largestSum(arr1 , arr2))

// let r = setA;
// let s = setB; 

//    function totalnum(r,s){
//     let sum = 0;
//     let max= 0 ;
//     for(let i =0 ; i < r.length; i++){
//            sum +=r[i]
//            if(sum>max){
//             max= sum
//            }
//     }
//     for(let i =0 ; i < s.length; i++){
//         sum +=s[i]
//         if(sum>max){
//          max= sum
//         }
//  }

//  return max

//    }

//    console.log(totalnum(r,s))
  