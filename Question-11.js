// Write a program to calculate the total of all the numbers


let numbers = [1,5,8,9, [12, 21, 31, 41], [16,18] , 22, 24 ]

console.log(numbers)


let flatNumbers = numbers.flat()

// console.log(flatNumbers = numbers.flat().reduce((a,b) => a + b ,0 ))

console.log('Numbers of lenght : ',  flatNumbers.length)

console.log(
     'calculate total of the all numbers : ',flatNumbers.reduce((a, b) => a + b, 0)
  )
  