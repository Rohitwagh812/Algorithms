
// Write a program to remove all duplicate characters in the sentence.
// For Example : a is repeating several times, so remove all duplicate occurances of a

let sentence = 'Hello i am learning JavaScript'

//remove all duplicate characters inn the sentence

console.log(sentence)

console.log('All Duplicate Characters Remove :-')

let sentenceArrey = sentence.split('')

let removesentence= [...new Set(sentence)];

let output = removesentence.join('')

console.log(output)