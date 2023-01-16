/*
#6. Random Element
Write a JavaScript function to get a random item from an array.

Examples:
INPUT: randomElement([10,20,30,40])
OUTPUT: it should return some random element from array
INPUT: randomElement([‘d’,'c’,’t'])
OUTPUT: it should return some random element from array 
*/

const randomElement=function (arr)
{
    const randomIndex=Math.floor(Math.random()*arr.length)
    return arr[randomIndex]

    
}
console.log(randomElement(['d','c','t']));