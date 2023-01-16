/*
#2. Repeat a String

Write a JavaScript function to repeat a string a specified times.
Note - without using repeat() method

Examples:
INPUT: repeatString('a', 4)
OUTPUT: ‘aaaa'
INPUT: repeatString('a')
OUTPUT: ‘error in string or count'
*/

const repeatString=function(str,n)
{
    let result=''
    if(n==undefined)
    {
        return `There is error in String or Count...`
    }
    else{
        for(let i=1;i<=n;i++)
        {
            result+=str
        }
        return result
    }
   
}

console.log(repeatString('a'));