/*
#7. Last N Elements
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will
return the last 'n' elements of the array.

Examples:
INPUT: last([7, 9, 0, -2])
OUTPUT: -2
INPUT: last([7, 9, 0, -2],3)
OUTPUT: [9, 0, -2]
INPUT: last([7, 9, 0, -2],6)
OUTPUT: [7, 9, 0, -2]
*/

function last(arr,n)
{
    let result
    if(n==undefined)
    {
        result=(arr[arr.length-1])
    }
    else{
       result= arr.slice(-n)
    }
   

    return result
}

console.log(last([7, 9, 0, -2]));