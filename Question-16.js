

// Write a program to calculate the sum of all the masses of the objects

const characters = [
{
name: 'Luke Skywalker',
height: 172,
mass: 77,
eye_color: 'blue',
gender: 'male',
},
{
name: 'Darth Vader',
height: 202,
mass: 136,
eye_color: 'yellow',
gender: 'male',
},
{
name: 'Leia Organa',
height: 150,
mass: 49,
eye_color: 'brown',
gender: 'female',
},
{
name: 'Anakin Skywalker',
height: 188,
mass: 84,
eye_color: 'blue',
gender: 'male',
},
];


let massArray = []

for(let i =0 ; i< characters.length; i++){
    let currentCheracters = characters[i];
    if(!massArray.includes(currentCheracters.mass)){
        massArray.push(currentCheracters.mass)
    }

}

    let sum = 0;
    console.log(massArray)
// Running the for loop
for (let i = 0; i < massArray.length; i++) {
    sum += massArray[i];
    array=sum
}
    
console.log('sum of all the masses : ' +sum)



let sum1 = massArray.reduce(function (x ,y){
    return x + y
} , 0)



 
console.log('sum of all the masses : ' +sum1)