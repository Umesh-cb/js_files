/*
#3. Count Up then Down
Create a function that takes a number as an argument and returns an array. The first
element of the array should be 0, and then each element should increase by 1 until it
reaches the input number. Then, each element should count back down to 0.

Examples:
INPUT: countUpThenDown(2)
OUTPUT: [0, 1, 2, 1, 0]
INPUT: countUpThenDown(0)
OUTPUT: [0]
*/
function countUpDown(n)
{
    const arr=[]

    for(let i=0;i<=n;i++)
    {
        arr.push(i)
        if(i==n){startDown=true}
    }
  
        for(let i=n-1;i>=0;i--)
        {
            arr.push(i)
        }
   

    return arr
   
}

console.log(countUpDown(3))