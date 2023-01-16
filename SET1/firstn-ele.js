/*
#8. First n elements in array
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will
return the first 'n' elements of the array.

Example:
INPUT: first([7, 9, 0, -2])
OUTPUT: 7
INPUT: first([],3)
OUTPUT: []
INPUT: first([7, 9, 0, -2],3)
OUTPUT: [7, 9, 0]
INPUT: first([7, 9, 0, -2],6)
OUTPUT: [7, 9, 0, -2]
INPUT: first([7, 9, 0, -2],-3)
OUTPUT: [7,9,0,-2]
*/

function first(arr,numberOfElementsToBe=0)
{
    const newArray=[]
    if(numberOfElementsToBe==0)
    {
        return arr[0]
    }
    else
    {
        for(let i=0;i<numberOfElementsToBe;i++)
        {
            if(arr.length>i)
            {
                newArray.push(arr[i])
            }
        }
      return newArray
    }
}

console.log(first([7,9,0,-2]))
console.log(first([],3))
console.log(first([7,9,0,-2],3))
console.log(first([7,9,0,-2],6))