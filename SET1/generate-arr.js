/*
#6. Generate an Array by Range
Write a JavaScript function to generate an array between two integers of 1 step length.

Example:
INPUT: rangeBetween(4, 7)
OUTPUT: [4, 5, 6, 7]
INPUT: rangeBetween(-4, 7)
OUTPUT: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/

function rangeBetween(a,b)
{
    const result=[]
    for(let i=a;i<=b;i++)
    {
        result.push(i)
    }
    return result
}

console.log(rangeBetween(-4, 7));