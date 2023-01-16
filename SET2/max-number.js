/*
#2. Maximum number in array
Write a JavaScript function to find the highest value in an array.
Note - Without using Math.max()

Examples:
INPUT: max([12,34,56,1])
OUTPUT: 56
INPUT: max([-12,-34,0,-56,-1])
OUTPUT: 0
 */

const maxNumber=function(arr)
{
    let maxNum=0
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]>arr[i])
            {
               temp= arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
    maxNum=arr[0]
    return maxNum
}

function max(arr)
{
    let result=arr[0]
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>result)
        {
            result=arr[i]
        }
    }
    return result
}

console.log(`The maximum number of given array is : ${max([12,34,56,1])}`);