/*
#4. Find the sum of the array
Given an array of numbers, find the sum of the elements

Example:
INPUT: sumArray([10,20,30])
OUTPUT: 60
INPUT: sumArray([])
OUTPUT: 0
*/

function sumArray(arr)
{
    let result=0
    for(let i=0;i<arr.length;i++)
    {
        result += arr[i]
    }
    return result
}

console.log( sumArray([10,20,45,45]));