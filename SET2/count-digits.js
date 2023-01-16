/*
#3. Count the digits
Write the javaScript function to count the digits of integer

Example
Input - countDigits(1947)
output - 21
 */

function countDigits(int)
{
    let result=0
    const strNum=String(int)
    for(let i=0;i<strNum.length;i++)
    {
        result += parseInt(strNum[i])
    }
  return  result
}

console.log(countDigits(800900));